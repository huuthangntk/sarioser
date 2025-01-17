import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-[#1A1F2C] border-purple-500/20">
        <div className="py-6">
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#8B5CF6',
                    brandAccent: '#7C3AED',
                    inputText: 'white',
                    inputBackground: 'transparent',
                    inputBorder: '#4B5563',
                    inputLabelText: 'white',
                    inputPlaceholder: '#9CA3AF',
                  },
                },
              },
              className: {
                input: 'text-white placeholder:text-gray-400',
                label: 'text-white',
                message: 'text-white',
              },
            }}
            providers={[]}
            redirectTo="https://sarioser.xyz"
            localization={{
              variables: {
                sign_in: {
                  email_label: 'ایمیل',
                  password_label: 'رمز عبور',
                  button_label: 'ورود',
                  loading_button_label: 'در حال ورود...',
                  social_provider_text: 'ورود با {{provider}}',
                  link_text: 'حساب کاربری دارید؟ وارد شوید',
                },
                sign_up: {
                  email_label: 'ایمیل',
                  password_label: 'رمز عبور',
                  confirm_password_label: 'تکرار رمز عبور',
                  button_label: 'ثبت نام',
                  loading_button_label: 'در حال ثبت نام...',
                  social_provider_text: 'ثبت نام با {{provider}}',
                  link_text: 'حساب کاربری ندارید؟ ثبت نام کنید',
                },
                forgotten_password: {
                  link_text: 'رمز عبور خود را فراموش کرده‌اید؟',
                  button_label: 'بازیابی رمز عبور',
                  loading_button_label: 'در حال ارسال ایمیل بازیابی...',
                  confirmation_text: 'ایمیل بازیابی رمز عبور ارسال شد',
                },
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};