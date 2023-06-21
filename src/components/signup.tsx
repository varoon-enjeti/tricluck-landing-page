import React from 'react';

export default function SignUp() {
    return (
        <div className="p-4 w-2/5 m-24 rounded-lg bg-violet-600 shadow-2xl opacity-90">
            <form onSubmit = {e => {
                e.preventDefault();
                alert("Thanks for joining our newsletter!");
            }}>
                <p className="text-yellow-400 text-2xl font-bold ">Sign Up for Our Newsletter</p><br/>

                <div className="grid grid-cols-2 grid-rows-2 text-lg">
                    
                    <div className="mr-2">
                        <label htmlFor="fname" className="text-white">Your First Name</label><br/>
                        <input type="text" id="fname" name="fname" placeholder = "First name..." className="border-2 p-2 min-w-full"/>
                    </div>
                    <div className="ml-2">                    
                        <label htmlFor="lname" className="text-white">Your Last Name</label><br/>
                        <input type="text" id="lname" name="lname" placeholder = "Last name..."  className="border-2 p-2 min-w-full" />
                    </div>
                    <div className="mt-2 min-w-full col-span-2"> 
                        <label htmlFor="getemail" className="text-white">Your Email</label>
                        <input type="email" id="getemail" name="getemail" placeholder = "Email..." className="border-2 p-2 min-w-full"/>
                    </div>

                </div>

                <button className="bg-yellow-500 text-white rounded-lg p-3 mt-4 shadow-lg shadow-amber-300/30">Submit</button>
            </form>
        </div>
    );
}