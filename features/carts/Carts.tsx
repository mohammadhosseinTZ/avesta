import Cart from '@/components/carts/Cart'

function Carts() {

  return (
    <div className='container mb-[50px]'>
        <h4 className='text-white-color text-[20px] md:text-[20px] font-bold text-center leading-9 md:leading-11.5 '><span className='text-orange'>اولین</span> قدمتان را در مسیر حمل‌ونقل کالا با اوستا <span className='text-orange'>هوشمندانه</span> بردارید</h4>
        <p className="text-white-color text-[13px] my-[15px] text-center leading-7.5 md:px-[160px]">انتخاب یک شریک مطمئن، تأثیر مستقیمی بر موفقیت کسب‌وکار شما دارد. اوستا هوش‌یار با ارائه راهکارهای هوشمند، شفاف و کارآمد، بهترین انتخاب برای حمل‌ونقل شما فراهم می‌آورد.</p>
        <Cart/>
    </div>
  )
}

export default Carts