export interface CardProps{
    title: string;
    content: string;
}

export interface PostModalProps{
        title: string;
    content: string;
}

export interface ModalProps {
  onAddPost: (post: { title: string; content: string }) => void;
}

export interface ButtonProps {
    size: "small" | "medium" | "large";
    shape: "rounded-sm" | "rounded-md" | "rounded-full"
    children: React.ReactNode;
}