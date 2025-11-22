import Card from "@/components/common/Card"


const Home: React.FC = () =>{
    return(
        <div>
            <h1>HOME PAGE</h1>
            <Card 
            title="WELCOME TO ALX LISTNG APPLICATION"
            content="find milleions of homes at the most affordable prices"
            />
              <Card 
        title="Why Choose Us?"
        content="Trusted by millions of travelers worldwide."
      />

      <Card 
        title="Top Deals"
        content="Enjoy promotional offers on top properties."
      />
        </div>
    )
}


export default Home