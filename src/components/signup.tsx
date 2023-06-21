import React from 'react';

export default function SignUp() {
    return (
        <div className="p-4 w-2/5 m-4 rounded-lg border-4 drop-shadow-lg">
            <form onSubmit = {e => {
                e.preventDefault();
                alert("Thanks for joining our newsletter!");
            }}>
                <p className="text-red-600 text-xl underline">Sign Up for Our Newsletter</p><br/>

                <div className="grid grid-cols-2 grid-rows-2 text-lg">
                    
                    <div className="mr-2">
                        <label htmlFor="fname">Your First Name</label><br/>
                        <input type="text" id="fname" name="fname" placeholder = "First name..." className="border-2 p-2 min-w-full"/>
                    </div>
                    <div className="ml-2">                    
                        <label htmlFor="lname">Your Last Name</label><br/>
                        <input type="text" id="lname" name="lname" placeholder = "Last name..."  className="border-2 p-2 min-w-full" />
                    </div>
                    <div className="mt-2 min-w-full col-span-2"> 
                        <label htmlFor="getemail">Your Email</label>
                        <input type="email" id="getemail" name="getemail" placeholder = "Email..." className="border-2 p-2 min-w-full"/>
                    </div>

                </div>

                <button className="bg-slate-400 text-white rounded-lg p-2 mt-4">Submit</button>
            </form>
        </div>
    );
}