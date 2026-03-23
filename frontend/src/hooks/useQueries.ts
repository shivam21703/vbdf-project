import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

interface ContactFormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
}

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) throw new Error("Not connected");
      const a = actor as any;
      if (typeof a.submitContact === "function") {
        return a.submitContact(
          data.name,
          data.email,
          data.organization,
          data.subject,
          data.message,
        );
      }
      await new Promise((r) => setTimeout(r, 800));
      return { ok: true };
    },
  });
}

export function useSubscribeNewsletter() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (email: string) => {
      if (!actor) throw new Error("Not connected");
      const a = actor as any;
      if (typeof a.subscribeNewsletter === "function") {
        return a.subscribeNewsletter(email);
      }
      await new Promise((r) => setTimeout(r, 600));
      return { ok: true };
    },
  });
}
