"use client";
import { bookingAction, contactShowingAction } from "@/action/PropertyAction";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";
import { LockKeyholeOpen } from "lucide-react";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import React from "react";

function ContactAlert({
  propertyId,
  title,
  btnText,
  description,
  type,
}: {
  propertyId: string;
  btnText: string;
  title: string;
  description: string;
  type: "contact" | "booking";
}) {
  const router = useRouter();

  const hanldleClick = async () => {
    try {
      if (type === "contact") {
        const response = await contactShowingAction({ propertyId });
        if (response.success) {
          enqueueSnackbar(response.message, {
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          });

          router.refresh();
        } else {
          enqueueSnackbar(response.error, {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          });
        }
      }

      if (type === "booking") {
        const response = await bookingAction({ propertyId });

       

        if (response.success) {
          enqueueSnackbar(response.message, {
            variant: "success",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          });

          router.refresh();
        } else {
          enqueueSnackbar(response.message, {
            variant: "error",
            anchorOrigin: {
              vertical: "top",
              horizontal: "center",
            },
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          color={"red"}
          size={{
            initial: "2",
            lg: "3",
          }}
        >
          <LockKeyholeOpen size={15} /> {btnText}
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth="450px">
        <AlertDialog.Title>{title}</AlertDialog.Title>
        <AlertDialog.Description size="2">
          {description}
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Cancel>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button onClick={hanldleClick} variant="solid" color="red">
              Yes
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}

export default ContactAlert;
