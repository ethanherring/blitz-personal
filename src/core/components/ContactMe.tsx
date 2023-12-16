import MultiSelectDropdown from "./MultiSelectDropdown";


const ContactMe = () => {

  let inputString: string;
  const contactReasons = ["Work Together", "Quote a Project", "Career Opportunities"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(e);
  }


  return (
    <div id="contact" className="flex flex-row justify-center">
      <form className="border-solid border-2 border-gray-300 px-12 pb-12 pt-2 rounded-md hover:border-dashed">
        <h1 className="text-3xl mb-2">Contact Me</h1>
        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@website.com" required>{inputString}</input>
        <MultiSelectDropdown dropdownOptionsArray={contactReasons} />
        <button onSubmit={handleSubmit} className="border-solid border-2 border-gray-200 block mt-4 text-sm font-medium text-gray-900 dark:text-white">Submit</button>
      </form>
    </div>
  );
}

export default ContactMe
