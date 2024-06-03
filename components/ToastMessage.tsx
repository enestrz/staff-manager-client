import toast from "react-hot-toast";

// Return a toast message with a message and a type of message
export default function ToastMessage(message: string, isSuccessfull: boolean) {
    isSuccessfull ? toast.success(message) : toast.error(message);
}
