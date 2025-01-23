import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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
