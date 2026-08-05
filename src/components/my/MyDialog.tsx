import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { ComponentRenderFn, HTMLProps } from "@base-ui/react";
import type { DialogTriggerState } from "@base-ui/react/dialog";
import React, { type JSXElementConstructor, type ReactElement } from "react";

type MyDialogProps = {
  open?: boolean;
  onOpenChange?: () => void;
  trigger?:
    | ReactElement<unknown, string | JSXElementConstructor<any>>
    | ComponentRenderFn<HTMLProps, DialogTriggerState>
    | undefined;
  children: React.ReactNode;
  header: string;
};

function MyDialog({
  children,
  trigger,
  header,
  open,
  onOpenChange,
}: MyDialogProps) {
  return (
    <Dialog open={!!open} onOpenChange={onOpenChange}>
      <DialogTrigger render={trigger} />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default MyDialog;
