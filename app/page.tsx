import { About, Banner, Carts, Hero, Info, Services } from "@/features"

function page() {
  return (

      <div className="" >
        <Hero />
        <section className="bg-stars-one">
          <Services/>
          <About/>
        </section>
        <section className="bg-stars-two">
          <Info/>
          <Carts/>
         <Banner/> 
        </section>
      </div>

  )
}

export default page