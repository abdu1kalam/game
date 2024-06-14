"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  handleInstallClick(): void;
  show: any;
};

const PWAModal = ({ handleInstallClick, show }: Props) => {
  return (
    <>
      {show && (
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Install the App</DialogTitle>
              <DialogDescription>
                Install this app to your device for quick access and an enhanced
                experience, even when offline.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex flex-row">
              <Button
                className="w-[70px] px-4"
                variant={"ghost"}
                type="submit"
                onClick={handleInstallClick}
              >
                Confirm
              </Button>
              <DialogClose asChild>
                <Button className="w-[70px] px-4" variant={"ghost"}>
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default PWAModal;
