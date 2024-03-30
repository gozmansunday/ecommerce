"use client";

// Global Imports
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

// Local Imports
import { Button } from "../ui/button";

interface Props {
  valueKey: string;
  name: string;
  data: (Color | Size)[];
};

export const Filter = ({ valueKey, name, data }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const handleFilter = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl({
      url: window.location.href,
      query
    }, { skipNull: true });

    router.push(url);
  };

  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-xl font-semibold">
        {name}
      </h4>

      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <Button
            key={filter.id}
            variant={selectedValue === filter.id ? "default" : "secondary"}
            onClick={() => handleFilter(filter.id)}
            className="rounded-full"
          >
            {filter.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
