# [Avesta](https://avesta-six.vercel.app/) – سامانه مدیریت الکترونیک حمل و نقل و لجستیک

این پروژه یک لندینگ‌پیج کاملاً ریسپانسیو برای معرفی **سامانه مدیریت الکترونیک اوستا** است. این سامانه با هدف ارائه خدمات پیشرفته در حوزه حمل‌ونقل کالا و لجستیک طراحی شده و با استفاده از تکنولوژی‌های مدرن و معماری ماژولار توسعه یافته است.

---

## 🚀 تکنولوژی‌های استفاده‌شده

- [Next.js 14 – App Router](https://nextjs.org/docs/app)  
- [TypeScript](https://www.typescriptlang.org)  
- [Tailwind CSS](https://tailwindcss.com)  

---

## 🎯 ویژگی‌ها (Features)

- ✅ طراحی کاملاً **ریسپانسیو** برای موبایل، تبلت و دسکتاپ  
- ✅ استفاده از **Shared Layout** در کل پروژه  
- ✅ استفاده از **`generateMetadata`** برای تعریف متاتگ‌های **داینامیک و سئو فرندلی**  
- ✅ استفاده از **Mock API** داخلی برای تست بدون نیاز به بک‌اند  
- ✅ ساختار **ماژولار، قابل توسعه و تمیز**

---

## 📁 ساختار پوشه‌ها
app/
├── page.tsx              ← صفحه اصلی لندینگ
├── layout.tsx            ← لیوت عمومی + metadata عمومی
│
├── api/                  ← API داخلی برای mock
│   └── managers/route.ts     ← API فرضی اطلاعات لندینگ
│   └── services/route.ts
│
├── components/           ← کامپوننت‌های قابل استفاده مجدد
│
├── features/             ← بخش‌های مستقل محتوای لندینگ
│
├── services/             ← توابع fetch برای گرفتن داده‌ها
│
├── types/                ← انواع TypeScript مورد نیاز
│
├── lib/                  ← توابع قایل استافده مجدد


---

## 🔁 Mock API

برای شبیه‌سازی داده‌ها و تست سریع رابط کاربری، در مسیر `app/api/services/route.ts` , `app/api/managers/route.ts` یک endpoint ساده پیاده‌سازی شده که اطلاعات فرضی (mock) را باز می‌گرداند.

---

نحوه اجرای پروژه:

1- کلون کردن پروژه <br/>
2-نصب وابستگی ها: npm install 
<br/>
3-اجرای پروژه در حالت توسعه: npm run dev
<br/>
4- پروژه از طریق مسیر http://localhost:3000 در دسترس است.

---

مشاهده پروژه: [Avesta](https://avesta-six.vercel.app/)
