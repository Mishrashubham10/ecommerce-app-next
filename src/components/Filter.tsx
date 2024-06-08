export default function Filter() {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id="type"
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]"
        >
          <option value="type">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input
          type="number"
          placeholder="min price"
          name="min"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="max"
          placeholder="max price"
          name="max"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id="type"
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]"
        >
          <option>Category</option>
          <option value="physical">New Arrival</option>
          <option value="digital">Popular</option>
        </select>
        <select
          name="type"
          id="type"
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]"
        >
          <option value="type">Type</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id="type"
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]"
        >
          <option>All Filters</option>
        </select>
      </div>
      <div className="">
        <select
          name="type"
          id="type"
          className="py-2 px-4 rounded-2xl text-sm font-medium bg-[#EBEDED]"
        >
          <option>Sort By</option>
          <option value="">Price (low to high)</option>
          <option value="">Price (high to low)</option>
          <option value="">Newest</option>
          <option value="">Oldest</option>
        </select>
      </div>
    </div>
  );
}