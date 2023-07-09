// import { Category } from "../models/shopping/Category";
// import { Product } from "../models/shopping/Product";
import { Rescues } from "../../models";

const handler = async (req, res) => {
    // const rescues = await Rescues.find();

    // rescues.map( async (rescue) => {
    //     // console.log(rescue)
    //     const result = await Rescues.findByIdAndUpdate(
    //         rescue._id,
    //         { active: true }
    //     );
    //     console.log(result);
    // });
    
    // await Product.deleteMany();
    // await Category.deleteMany();

    // const categories = await Category.insertMany([
    //     { name: "Cat Treats", image: "footer-cat-free-img-1.png" },
    //     { name: "Dog Treats", image: "footer-dog-free-img-2.png" },
    //     { name: "Merch", image: "footer-cat-free-img-2.png" },
    // ]);

    // const products = await Product.insertMany([
    //     {
    //         name: "Kitty Kisses 60g",
    //         description:
    //             "Delicious, balanced, semisoft, 100% Canadian, beef, turkey, pork cat treats, your cat will love!",
    //         image: "Kitty Kisses.png",
    //         category: categories[0]._id,
    //         price: 12.99,
    //         isCharitable: true,
    //         quantity: 0,
    //     },
    //     {
    //         name: "Beef Bark Chews 100g",
    //         description:
    //             "Healthy, Natural, Human Grade, 100% Canadian Dehydrated Dog Chew Mouth-watering Lasting chew that can be give as a reward or activity anytime.",
    //         image: "Beef Chews.png",
    //         category: categories[1]._id,
    //         price: 13.99,
    //         isCharitable: true,
    //         quantity: 1,
    //     },
    //     // {
    //     //   name: "Chicken Chunks 100g",
    //     //   description:
    //     //     "No additives No Preservatives, Chicken morsels made in Canada with Canadian Chicken, low fat, pocket friendly, easy treat for a reward or just to say I love you!",
    //     //   image: "Chicken Chunks.png",
    //     //   category: categories[1]._id,
    //     //   price: 9.99,
    //     //   isCharitable: true,
    //     //   quantity: 1,
    //     // },
    //     {
    //         name: "Beef Treats 90g",
    //         category: categories[1]._id,
    //         description:
    //             "Healthy, Low Fat, Breakable, Human grade, 100% Canadian Dehydrated Dog Treats. A popular treat that is said to be a dog’s very favourite.",
    //         image: "Beef Bites.png",
    //         price: 11.99,
    //         isCharitable: true,
    //         quantity: 1,
    //     },
    //     {
    //         name: "Beef Liver Treats 180g",
    //         category: categories[1]._id,
    //         description:
    //             "Healthy, Rich in Iron, Breakable, Human grade, 100% Canadian Dehydrated Dog Treats. Great for training, as small little pieces can be broken off and given as a reward or daily treat. ",
    //         image: "Beef-Liver-Treats.gif",
    //         price: 12.99,
    //         isCharitable: true,
    //         quantity: 1,
    //     },
    //     {
    //         name: "Reusable Silicon Bag",
    //         category: categories[2]._id,
    //         description:
    //             "Reusable, resealable silicon bag to safely store your pet treats.  Dishwasher safe.",
    //         image: "silicon-bag.jpg",
    //         price: 4.99,
    //         isCharitable: false,
    //         quantity: 1,
    //     },
    // ]);

    // return res.status(200).json("success");
    // }
};

export default handler;
