export default function TextInput({ title, ...attributes }) {
    return (
        <>
            <label className="block text-sm font-medium text-gray-700">
                {title}
            </label>
            <input
                type="text"
                className="mt-1 border ring-indigo-500 p-2  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-400 rounded-md"
                {...attributes}
            />
        </>
    );
}
