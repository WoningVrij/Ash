import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      
      // Map form data to Google Form field names
      const googleFormData = new URLSearchParams();
      
      // Helper function to safely get form values as strings
      const getFormValue = (key: string, defaultValue: string = ''): string => {
        const value = formData.get(key);
        if (value === null || value === undefined) return defaultValue;
        if (value instanceof File) return ''; // Handle file inputs if any
        return value.toString();
      };

      // Add form values
      googleFormData.append('entry.1692253209', getFormValue('firstName'));  // First Name
      googleFormData.append('entry.807464301', getFormValue('lastName'));   // Last Name
      googleFormData.append('entry.120832022', getFormValue('email'));      // Email
      googleFormData.append('entry.1711027045', getFormValue('phone'));     // Phone
      
      // Add default values for required fields
      googleFormData.append('entry.1238028819', 'Either Location');  // Location preference
      googleFormData.append('entry.1829289710', 'Room (€525/month)'); // Room type
      googleFormData.append('entry.268914346', 'Current Student');   // Status
      googleFormData.append('entry.1481088592', new Date().toISOString().split('T')[0]); // Today's date
      googleFormData.append('entry.16072526', getFormValue('additionalInfo', 'No additional info')); // Additional info

      // Submit to Google Form
      await fetch('https://docs.google.com/forms/d/e/1FAIpQLSfyD4ph9b7DkblGcpu6eiYKIGmO4M38FNvLqcdufUcu3cz0cQ/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      
      // Note: With no-cors mode, we can't read the response
      // But the form should still submit successfully

      toast({
        title: "Application Submitted",
        description: t.contact.form.submitSuccess,
      });

      // Reset form
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-modern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-ash-dark mb-6 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="text-xl md:text-2xl text-ash-gray max-w-4xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-10 shadow-modern-lg card-hover">
            <h3 className="text-3xl font-bold text-ash-dark mb-8 tracking-tight">{t.contact.form.title}</h3>
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-ash-dark mb-2">
                    {t.contact.form.firstName} *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-ash-dark mb-2">
                    {t.contact.form.lastName} *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium text-ash-dark mb-2">
                  {t.contact.form.email} *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-ash-dark mb-2">
                  {t.contact.form.phone}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="preferredLocation" className="text-sm font-medium text-ash-dark mb-2">
                    {t.contact.form.location} *
                  </Label>
                  <Select name="preferredLocation" required>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      <SelectItem value="amsterdam">{t.contact.options.amsterdam}</SelectItem>
                      <SelectItem value="haarlem">{t.contact.options.haarlem}</SelectItem>
                      <SelectItem value="either">{t.contact.options.either}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="roomType" className="text-sm font-medium text-ash-dark mb-2">
                    {t.contact.form.roomType} *
                  </Label>
                  <Select name="roomType" required>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 shadow-lg">
                      <SelectItem value="room">{t.contact.options.room}</SelectItem>
                      <SelectItem value="studio">{t.contact.options.studio}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="currentStatus" className="text-sm font-medium text-ash-dark mb-2">
                  {t.contact.form.currentStatus} *
                </Label>
                <Select name="currentStatus" required>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border border-gray-200 shadow-lg">
                    <SelectItem value="student">{t.contact.options.student}</SelectItem>
                    <SelectItem value="recent-graduate">{t.contact.options.graduate}</SelectItem>
                    <SelectItem value="job-seeker">{t.contact.options.jobSeeker}</SelectItem>
                    <SelectItem value="employed">{t.contact.options.employed}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="movingDate" className="text-sm font-medium text-ash-dark mb-2">
                  {t.contact.form.movingDate}
                </Label>
                <Input
                  id="movingDate"
                  name="movingDate"
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent"
                />
              </div>

              <div>
                <Label htmlFor="additionalInfo" className="text-sm font-medium text-ash-dark mb-2">
                  {t.contact.form.additionalInfo}
                </Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ash-orange focus:border-transparent"
                  placeholder={t.contact.form.placeholder}
                />
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="consent"
                  required
                  className="mt-1 h-4 w-4 text-ash-orange focus:ring-ash-orange border-gray-300 rounded"
                />
                <Label htmlFor="consent" className="text-sm text-ash-gray">
                  {t.contact.form.consent}
                </Label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ash-orange text-white py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : t.contact.form.submit}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">{t.contact.info.title}</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ash-orange rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{t.contact.info.email}</h4>
                    <p className="text-ash-gray">info@afterstudenthousing.com</p>
                    <p className="text-sm text-ash-gray">{t.contact.info.emailResponse}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-ash-orange rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{t.contact.info.phone}</h4>
                    <p className="text-ash-gray">+31 6 NBA</p>
                    <p className="text-sm text-ash-gray">{t.contact.info.phoneHours}</p>
                  </div>
                </div>


              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-black mb-6">{t.contact.steps.title}</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ash-orange rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{t.contact.steps.step1.title}</h4>
                    <p className="text-ash-gray text-sm">{t.contact.steps.step1.description}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ash-orange rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{t.contact.steps.step2.title}</h4>
                    <p className="text-ash-gray text-sm">{t.contact.steps.step2.description}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ash-orange rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{t.contact.steps.step3.title}</h4>
                    <p className="text-ash-gray text-sm">{t.contact.steps.step3.description}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ash-orange rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{t.contact.steps.step4.title}</h4>
                    <p className="text-ash-gray text-sm">{t.contact.steps.step4.description}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-ash-orange rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{t.contact.steps.step5.title}</h4>
                    <p className="text-ash-gray text-sm">{t.contact.steps.step5.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
