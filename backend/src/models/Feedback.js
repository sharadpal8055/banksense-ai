import mongoose from "mongoose";


const feedbackSchema = new mongoose.Schema(
  {


    // linked prospect
    prospect: {

      type: mongoose.Schema.Types.ObjectId,

      ref: "Prospect",

      required: true

    },



    // later connect actual banker auth

    bankerName: {

      type: String,

      default: "Demo Banker"

    },



    // banker action

    action: {

      type: String,


      enum: [

        "CALL",

        "SEND_OFFER",

        "SKIP"

      ],


      required: true

    },



    // final result

    outcome: {

      type: String,


      enum: [

        "CONVERTED",

        "REJECTED",

        "FOLLOW_UP",

        "PENDING"

      ],


      default: "PENDING"

    },



    // banker explanation

    reason: {

      type: String

    },



    // AI learning output

    learningNote: {

      type: String

    }


  },

  {

    timestamps: true

  }

);



export default mongoose.model(

  "Feedback",

  feedbackSchema

);