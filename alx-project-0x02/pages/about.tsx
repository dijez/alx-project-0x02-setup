import Button from "@/components/common/Button"
import Header from "@/components/layout/Header"

const About: React.FC = () =>{
    return(
        <div>
            <Header />
            <h1>ABOUT PAGE</h1>

            <Button size="small" shape="rounded-sm"> Small button</Button>
            <Button size="medium" shape="rounded-md"> medium button</Button>
            <Button size="large" shape="rounded-full"> large button</Button>
        </div>
    )
}


export default About