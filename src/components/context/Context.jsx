import React, { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Context = createContext();
export function Provider(props) {
  const [data, setData] = useState([
    {
      id: "1",
      title: "گوشی  11",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/6e25f9b57c920efd55f980d129614b18f83bd451_1670074732.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/a9ab05d6c45423bbcebaa6e4e3efe0126de08cc4_1670074734.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/a377e5784c33dbff661222e0ef2c07c70cc6c3fb_1670074739.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/6cd2f0c6197e2e872769c97c90ec58d027f2c41a_1670074743.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "این گوشی موبایل است و خیلی زیباست و جدیدترین محصول شرکت خوب ماست ",
      content:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد",
      colors: ["red", "blue", "teal"],
      price: 180000,
      count: 1,
    },
    {
      id: "2",
      title: "گوشی  7",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/ebb4f23ee5eb18868841fdbbe9bc29cf21cfa5b2_1656432952.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/9af42579a43b8a4d2b17c33fe5d542387ba42b5f_1656421008.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
      ],
      description: "گوشی موبایل اپل مدل iPhone 7 Plus ظرفیت 256 گیگابایت",
      content:
        "سومین نسل از فبلت‌های اپل همراه با سخت‌افزاری که جلوی هیچ‌ بازی یا برنامه‌ای کم نمی‌آورد، زوم اپتیکال که نتیجه‌ی دوربین‌های دوتایی است، نمایشگری مناسب برای بازی و مطالعه و همچنین باتری‌ای که اپل ادعا می‌کند، بهترین بازده را در میان تمام آیفون‌هایش دارد؛ مثل همیشه و با سروصدای زیادی روانه‌ی بازار شد. گوشی «آیفون 7پلاس» (Apple iPhone 7 Plus) بزرگ‌ترین و قدرتمند‌ترین آیفونی است که اپل تاکنون ساخته",
      colors: ["red", "blue", "teal"],
      price: 150000,
      count: 1,
    },
    {
      id: "3",
      title: "گوشی  12",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/a0b0a43c4063afddc9882a2caace30914fbc689f_1656430389.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/ba19b2db04e853866fee87866a09ff6c697f4f39_1653824373.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/75c303f015a74d08181cc46e08e5ff5ad74daebf_1653824371.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/ce3ef78b346dc6fb502fefd3406f504c66db6cbf_1642413293.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "گوشی موبایل اپل مدل iPhone 12 A2404 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
      content:
        "گوشی موبایل iPhone 12 A2404 CH پرچم‌دار جدید شرکت اپل است که با چند ویژگی جدید و دوربین دوگانه روانه بازار شده است. اپل برای ویژگی‌ها و طراحی کلی این گوشی از همان فرمول چند سال اخیرش استفاده کرده است. نمایشگر آیفون 12 به پنل Super Retina مجهز ‌شده است تا تصاویر بسیار مطلوبی را به کاربر عرضه کند.",
      colors: ["red", "blue", "teal"],
      price: 345000,
      count: 1,
    },
    {
      id: "4",
      title: "گوشی  S22ultra",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/3b80e5838f5ff4f674f82d5615296c06cd4f9f8c_1656404956.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/22ee99ce83c20434ab136c0290dbfdd3a50a608e_1652102430.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/142932dd6f95514a36a81d784e99cb9d6099b001_1652102435.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/4e8091634d7729c7de37c4036efa269142287145_1652102610.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/df66ac303ff2c0a00519de91246c2b66929cee83_1652102596.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/d6de3681607bc8d1e2f67b19b80c3cc8a8f028b4_1652263689.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/4cc28ae8b99a91b50d2041353c3286888b2d4e32_1652102618.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "گوشی موبایل سامسونگ مدل Galaxy S22 Ultra 5G دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت نسخه اسنپدراگون",
      content:
        "سامسونگ Galaxy S22 Ultra 5G با بهره بردن از مشخصات فنی مناسب و فوق قدرتمند به‌عنوان پرچمدار شرکت سامسونگ در تاریخ 9 فوریه سال 2022 معرفی شد. در همان نگاه اول طراحی کمی مشابه با پرچمداران سری نوت این شرکت را شاهد هستیم که البته زیبایی بصری بسیار جذابی را هم با خود به‌همراه داشته است. در نمای رو‌به‌رویی سامسونگ Galaxy S22 Ultra 5G به صفحه‌نمایش با ابعاد 6.8 اینچ و رزولوشن 1440×3088 پیکسل از نوع Dynamic AMOLED 2X مجهز شده است.",
      colors: ["red", "blue", "teal"],
      price: 80000,
      count: 1,
    },
    {
      id: "5",
      title: "گوشی  M52",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/b89c9a62a366dd9437b1563deb3395b441d92004_1656429481.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/77b774d953d94b8da64af83e8ac92e4468c024d2_1654581175.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/ef59a18aa6bec45d5f27d9e8eef9a7ddc612c547_1636976106.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "گوشی موبایل سامسونگ مدل GALAXY M52 5G SM-M526BR/DS دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت",
      content:
        "سری M و A گوشی‌های هوشمند میان‌رده سامسونگ تا به امروز توانسته‌اند با بهره بردن از مشخصات فنی مناسب و قابل قبول، عملکرد بسیار خوبی را به‌نمایش بگذارند. سامسونگ Galaxy M52 5G هم یکی از جدید‌ترین گوشی‌‌های هوشمند میان‌رده این شرکت است که در سال 2021 معرفی شده است. این گوشی به صفحه‌نمایش با ابعاد 6.7 اینچ و رزولوشن 1080×2400 پیکسل از نوع سوپر امولد پلاس مجهز شده است. ",
      colors: ["red", "blue", "teal"],
      price: 80000,
      count: 1,
    },
    {
      id: "6",
      title: "گوشی  SE ",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/3827a0aa00d51a7441d97355f8b049d3e973adb4_1668506860.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/cfbee2b3a46510d963d20432df9dc95b65b6e5de_1668506985.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/43d9125fb2d474bc60274c289b16320c9fa1347e_1668506992.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "گوشی موبایل اپل مدل SE 2020 LL/A تک سیم کارت ظرفیت 256 گیگابایت و 3 گیگابایت رم",
      content:
        "حروف بزرگ SE در کوچیک‌ترین عضو خانواده اپل نشان از خاص بودن این نسخه (Special Edition) دارد. گوشی 2020 iPhone SE برادر کوچکتر همان iPhone SE است که با چهار سال اختلاف سن روانه بازار شده است تا این بار آن دسته از طرفداران اپل که نمی‌خواهند بیش از اندازه هزینه کنند را به خود جلب کند. آیفون اس ای 2020 در واقع ارزان‌ترین آیفونی است که تا به حال به بازار عرضه شده است.",
      colors: ["red", "blue", "teal"],
      price: 80000,
      count: 1,
    },
    {
      id: "7",
      title: "گوشی  13PRO",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/2108647c04c8ff8206c7ba86aceb8b4173f06fcf_1656429062.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/030aa8c0d882b11f2df378be7bc1839912c6479c_1653816890.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/030aa8c0d882b11f2df378be7bc1839912c6479c_1653816890.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/e58f5d3bc9d227010b8bf2a6b909689ca6e83119_1631690693.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/195bd99289c288cbb927fe9b9d659275eefeae71_1631648798.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/9582480838e6440356f8469461aa51a7fa84cba2_1631648780.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/e58f5d3bc9d227010b8bf2a6b909689ca6e83119_1631690693.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/41c21ef6ec1beedf40b7d2caaf52b9c731a6ea1a_1631648797.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "گوشی موبایل اپل مدل iPhone 13 Pro A2639 دو سیم‌ کارت ظرفیت 512 گیگابایت و 6 گیگابایت رم",
      content:
        "بالاخره بعد از شایعات، شاهد رونمایی جدید‌ترین گوشی‌های هوشمند اپل در قالب خانواده آیفون 13 بودیم. آیفون 13 پرو مکس، آیفون 13 پرو، آیفون 13 و آیفون 13 مینی به‌عنوان جدید‌ترین گوشی‌های هوشمند این شرکت معرفی شدند. از نظر طراحی تفاوت چندانی با نسل قبلی پرچمداران این شرکت شاهد نبودیم. تنها در نمای رو به رویی این بار اپل از ناچ با عرض کمتری به نسبت نسل قبلی بهره برده است. آیفون 13 پرو به صفحه‌نمایشی 6.1 اینچی با رزولوشن 1284×2778 پیکسل مجهز شده است. برای اولین بار در تاریخ گوشی‌های هوشمند اپل، صفحه‌نمایش در نظر گرفته شده برای آیفون 13 پرو توانایی ارائه نرخ بروزرسانی 120 هرتز را دارد که بدون شک می تواند صفحه‌نمایشی روان تر و به مراتب با‌کیفیت‌تری به نسبت نسل های قبلی ارائه می‌کند.",
      colors: ["red", "blue", "teal"],
      price: 80000,
      count: 1,
    },
    {
      id: "8",
      title: "گوشی  Note11",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/e477016feaff5a6e6cf930517134eb3888c887ef_1656404674.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/af5648b1b5b2bd984dac010f0a9f40805cd6f95b_1655546456.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/660e405e23d87a02d9fb741531d0575a8023fda9_1645449789.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "گوشی موبایل شیائومی مدل Redmi Note 11 دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت",
      content:
        "شیائومی Redmi Note 11 به عنوان یکی از گوشی‌های هوشمند میان‌رده بسیار با‌کیفیت این شرکت شناخته می‌شود که به لطف بهره بردن از مشخصات فنی مناسب، توانایی ارائه عملکرد بسیار خوب و قابل قبولی را در جایگاه یک گوشی هوشمند میان‌رده دارد. در نمای رو‌به‌رویی این گوشی به صفحه‌نمایش با ابعاد 6.43 اینچ و رزولوشن 1080×2400 پیکسل از نوع امولد مجهز شده است.0",
      colors: ["red", "blue", "teal"],
      price: 80000,
      count: 1,
    },
    {
      id: "9",
      title: "گوشی  A13",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/59dc16202ed84e7920bdacc771a576e503868945_1656428139.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/969ad2de8fe4d94b9b9569e6b1d5c571ffb661a2_1654942010.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/56181a4df8d623bfca5ca95a1a9f39474114c92e_1654942014.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "گوشی موبایل سامسونگ مدل Galaxy A13 SM-A135F/DS دو سیم کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
      content:
        "سری A گوشی‌های هوشمند میان‌رده سامسونگ توانستند با بهره بردن از مشخصات فنی مناسب و البته قیمتی مقرون به‌صرفه، کاربران بسیاری را به سمت خودشان جلب کنند. یکی از این گوشی‌های میان‌رده با‌کیفیت و زیبا، سامسونگ Galaxy A13 SM-A135F/DS است که باید گفت بهره بردن از مشخصات فنی مناسب، سبب شده تا عملکرد بسیار خوب و کاملا قابل قبولی را در جایگاه یک گوشی هوشمند میان‌رده به شما ارائه کند",
      colors: ["red", "blue", "teal"],
      price: 80000,
      count: 1,
    },
    {
      id: "10",
      title: "گوشی  ZFOLD",
      images: [
        "https://dkstatics-public.digikala.com/digikala-products/8a508e5a3d58660a0c8e6e1a62e5bb2326d64a6a_1661346588.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
        "https://dkstatics-public.digikala.com/digikala-products/5dbbbdc80865bf9baafbf45b06e419fcc840f192_1666772341.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        "https://dkstatics-public.digikala.com/digikala-products/31f51571e9e607119741ef0aac10e9d6f32f6f6d_1661346594.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
      ],
      description:
        "گوشی موبایل سامسونگ مدل Galaxy Z Fold4 دو سیم کارت ظرفیت 256 گیگابایت و رم 12 گیگابایت",
      content:
        "سامسونگ Galaxy Z Fold4 یکی از گوشی‌های هوشمند انعطاف پذیر جدید این شرکت است که مشخصات فنی قدرتمند و قابلیت‌های جذابی را با خود به‌همراه دارد. باید قبول کرد که سامسونگ در عرصه گوشی‌های هوشمند انعطاف پذیر، پیشگام بوده است و توانسته عملکرد بسیار خوبی را به‌نمایش بگذارد. طراحی جذاب این گوشی چندان تفاوتی با نسل قبلی، یعنی Galaxy Z Fold3 چندان تفاوتی ندارد. ",
      colors: ["red", "blue", "teal"],
      price: 80000,
      count: 1,
    },
  ]);
  const [cart, setCart] = useState([]);
  const handleAddCart = (id) => {
    const checkItem = cart.every((item) => {
      return item.id !== id;
    });
    console.log(checkItem);
    if (checkItem) {
      toast.success(" محصول با موفقیت به سبد خرید اضافه شد");
      const product = data.filter((item) => {
        return item.id === id;
      });
      setCart([...cart, ...product]);
    } else {
      toast.error("این محصول قبلا اضافه شده!!!");
    }
  };
  console.log(cart);

  const increase = (id) => {
    const plus = cart.forEach((item) => {
      if (item.id === id) {
        return (item.count += 1);
      }
      setCart([...cart]);
    });
  };
  const decrease = (id) => {
    const plus = cart.forEach((item) => {
      if (item.id === id) {
        return item.count === 1 ? item.count === 1 : (item.count -= 1);
      }
      setCart([...cart]);
    });
  };

  const handleRemoveItem = (id) => {
    setCart(
      cart.filter((item) => {
        return item.id !== id;
      })
    );
    toast.error("محصول حذف شد!");
  };
  return (
    <Context.Provider
      value={[
        data,
        setData,
        handleAddCart,
        cart,
        increase,
        decrease,
        setCart,
        handleRemoveItem,
      ]}
    >
      {props.children}
    </Context.Provider>
  );
}
