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

export interface PostProps{
    id: number;
    title: string;
    content: string;
    userId: number;
}


export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo:{
            lat: number;
            lng: number;
        }
    },
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    }
}