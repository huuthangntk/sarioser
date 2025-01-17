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
                  },
                },
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
                },
                sign_up: {
                  email_label: 'ایمیل',
                  password_label: 'رمز عبور',
                  button_label: 'ثبت نام',
                },
              },
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};