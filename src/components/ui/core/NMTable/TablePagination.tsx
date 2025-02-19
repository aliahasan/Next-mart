import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../../button";

const TablePagination = ({ totalPage }: { totalPage: number }) => {
  const [currenPage, setCurrenPage] = useState(1);
  const router = useRouter();
  const pathName = usePathname();

  const handlePrevClick = () => {
    if (currenPage > 1) {
      setCurrenPage(currenPage - 1);
      router.push(`${pathName}?page=${currenPage - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currenPage < totalPage) {
      setCurrenPage(currenPage + 1);
      router.push(`${pathName}?page=${currenPage + 1}`);
    }
  };

  return (
    <div className="flex items-center gap-2 my-5">
      <Button
        onClick={handlePrevClick}
        disabled={currenPage === 1}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowLeft />
      </Button>
      {[...Array(totalPage)].map((_, index) => (
        <Button
          onClick={() => {
            setCurrenPage(index + 1);
            router.push(`${pathName}?page=${index + 1}`);
          }}
          key={index}
          variant={currenPage === index + 1 ? "default" : "outline"}
          size="sm"
          className="w-8 h-8 rounded-full flex items-center justify-center"
        >
          {index + 1}
        </Button>
      ))}
      <Button
        onClick={handleNextClick}
        disabled={currenPage === totalPage}
        variant="outline"
        size="sm"
        className="w-8 h-8 rounded-full flex items-center justify-center"
      >
        <ArrowRight />
      </Button>
    </div>
  );
};

export default TablePagination;
