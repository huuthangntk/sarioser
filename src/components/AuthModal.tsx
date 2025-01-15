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
        <Auth
          supabaseClient={supabase}
          appearance={{ 
            theme: ThemeSupa,
            variables: {
              default: {
                colors: {
                  brand: '#8B5CF6',
                  brandAccent: '#7C3AED',
                  inputBackground: '#2D3748',
                  inputText: '#FFFFFF',
                  inputPlaceholder: '#A0AEC0',
                }
              }
            }
          }}
          providers={["google"]}
          redirectTo={window.location.origin}
          theme="dark"
          localization={{
            variables: {
              sign_in: {
                email_label: "ایمیل",
                password_label: "رمز عبور",
                button_label: "ورود",
                loading_button_label: "در حال ورود...",
                social_provider_text: "ورود با {{provider}}",
                link_text: "حساب کاربری دارید؟ وارد شوید",
              },
              sign_up: {
                email_label: "ایمیل",
                password_label: "رمز عبور",
                button_label: "ثبت نام",
                loading_button_label: "در حال ثبت نام...",
                social_provider_text: "ثبت نام با {{provider}}",
                link_text: "حساب کاربری ندارید؟ ثبت نام کنید",
              },
            },
          }}
        />
      </DialogContent>
    </Dialog>
  );
};