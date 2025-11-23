import Button from "@/components/common/Button"


const About: React.FC = () =>{
    return(
        <div>
            <h1>ABOUT PAGE</h1>

            <Button size="small" shape="rounded-sm"> Small button</Button>
            <Button size="medium" shape="rounded-md"> medium button</Button>
            <Button size="large" shape="rounded-full"> large button</Button>
        </div>
    )
}


export default About