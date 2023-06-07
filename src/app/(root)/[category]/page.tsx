import Wrapper from "@/components/shared/Wrapper";
import { client } from "@/lib/sanity_client";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import ProductCart from "@/components/shared/ProductCart";

const getProducts = async ({ params }: { params: { category: string } }) => {
  const str = params.category;
  const str2 = str.charAt(0).toUpperCase() + str.slice(1);
  if (str2 === "Male" || str2 === "Female" || str2 === "Kids") {
    const res = await client.fetch(
      `*[_type == "product" && category->name == "${str2}"] {
          _id,
          name,
        price,
        image,
        slug {
            current
          },
        description,
      }`
    );
    return res;
  } else {
    const res = await client.fetch(`*[_type == "product"] {
        _id,
        name,
      price,
      image,
      slug {
        current
      },
      description,
    }
      `);
    return res;
  }
};

interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: IImage;
  slug: {
    current: string;
  };
  category: {
    name: string;
  };
  description: string;
}

const page = async ({ params }: { params: { category: string } }) => {
  const products: IProduct[] = await getProducts({ params });
  return (
    <Wrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 ">
        {products.map((prod) => (
          <div
            key={prod._id}
            className="flex flex-col justify-center items-start gap-y-4 w-64"
          >
            <Link href={`/product/${prod.slug.current}`}>
              <Image
                src={urlForImage(prod.image).url()}
                alt={prod.name}
                width={300}
                height={300}
              />
              <div className="flex flex-col justify-center items-center gap-y-3">
                <h5 className="capitalize self-start">{prod.name}</h5>
                <p className=" self-start font-bold text-[#666]">
                  {prod.description}
                </p>
                <p className=" self-start font-bold text-lg mt-1">
                  ${prod.price}.00
                </p>
              </div>
            </Link>
            <ProductCart prodId={prod._id} />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

// export async function generateStaticParams() {
//   const res: IProduct[] = await client.fetch(`*[_type == "product"]`);

//   return res.map((prod) => ({
//     params: {
//       category: prod.category.name,
//     },
//   }));
// }

export default page;
