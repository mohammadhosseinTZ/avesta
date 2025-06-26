import { About, Banner, Carts, Events, Hero, Info, Managers, Services, Tabs } from "@/features"

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
         <Tabs/>
         <Managers/> 
         <Events/>
        </section>
      </div>

  )
}

export default page