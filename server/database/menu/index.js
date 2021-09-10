import mogoose, { Mongoose } from "mongoose";

const MenuSchema = new Mongoose.Shcema({
    menus: [
        {
            name:{ type: String, required: true },
            items: [
                {
                    type: mogoose.Types.ObjectId,
                    ref: "Foods",
                },
            ],
        },
    ],
    recommended: [
        {
            type: mogoose.Types.ObjectId,
            ref: "Foods",
            unique: true,
        },
    ],
},
{
    timestamps: true
});

export const MenuModel = mogoose.model("Menue", MenuSchema);