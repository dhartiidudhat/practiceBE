import mongoose, { mongo } from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    exprienceInYear: {
      type: Number,
      default: 0,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    workHour: [
      {
        hospital: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Hospital",
        },
        workHour: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamp: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
