import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

/**
 * ErrorAlert component displays an alert with a custom error message.
 *
 * @param {string} props.message - The error message to be displayed in the alert. Usually the message from an error object.
 * @returns {JSX.Element} The rendered ErrorAlert component.
 *
 * @example
 * <ErrorAlert message="Backend does not answer." />
 *
 * @see {@link https://ui.shadcn.com/docs/components/alert} for more information.
 */
function ErrorAlert({ message }: { message: string }): JSX.Element {
  return (
    <Alert className="bg-destructive text-foreground rounded-xl">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}

export default ErrorAlert;
