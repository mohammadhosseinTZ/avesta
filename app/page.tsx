import { About, Banner, Carts, Events, Hero, Info, Managers, Services, Tabs } from "@/features"
export const generateMetadata = () => ({
  title: 'سامانه مدیریت الکترونیک اوستا | خدمات پیشرفته حمل و نقل و لجستیک',
  description: 'اوستا، سامانه‌ای برای مدیریت هوشمند لجستیک و حمل‌ونقل کالا با خدمات پیشرفته در سراسر کشور.',
  openGraph: {
    title: 'سامانه مدیریت الکترونیک اوستا',
    description: 'مدیریت هوشمند لجستیک و حمل‌ونقل با خدمات پیشرفته',
    url: 'http://avestasmart.com/',
    siteName: 'اوستا',
    locale: 'fa_IR',
    type: 'website',
  },
  icons:{
    icon:'/assets/logo-light.png'
  }
});
function page() {
  return (

    <div className="" >
      <Hero />
      <section className="bg-stars-one">
        <Services />
        <About />
      </section>
      <section className="bg-stars-two">
        <Info />
        <Carts />
        <Banner />
        <Tabs />
        <Managers />
        <Events />
      </section>
    </div>

  )
}

export default page