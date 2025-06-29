import { Inngest } from "inngest";
import user from '../models/user.js'

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Create an empty array where we'll export future Inngest functions

const syncUserCreation = inngest.createFunction(
    {id:'sync-user-from-clerk'},
    {event:'clerk/user.created'},
    async({event})=>{
        const {id, first_name, last_name, email_address, image_url} =event.date
        const userData={
            _id:id,
            email:email_address[0].email_address,
            name:first_name + '' + last_name,
            image:image_url
        }
        await user.create(userData)
    }
)

//Inngest function to delete from database
const syncUserDeletion = inngest.createFunction(
    {id:'delete-user-with-clerk'},
    {event:'clerk/user.deleted'},
    async({event})=>{
        const {id} = event.data
        await user.FindIdAndDelete(id)
    }
)

//Inngest function to update user data in database
const syncUserUpdation = inngest.createFunction(
    {id:'update-user-from-clerk'},
    {event:'clerk/user.updated'},
    async({event})=>{
       const {id, first_name, last_name, email_address, image_url} =event.date
        const userData={
            _id:id,
            email:email_address[0].email_address,
            name:first_name + '' + last_name,
            image:image_url
        }
        await user.findByIdAndUpdate(userData)
    }
)
export const functions = [
    syncUserCreation,
    syncUserDeletion,
    syncUserUpdation
];