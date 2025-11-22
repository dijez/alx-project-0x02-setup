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