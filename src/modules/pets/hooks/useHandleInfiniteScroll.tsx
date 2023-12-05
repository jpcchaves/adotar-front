import { useAppSelector } from "hooks/redux/useRedux";
import { useEffect } from "react";

interface IProps {
  listPets: (page: number) => void;
}

type ScrollVerificationResult = {
  isScrollingDown: boolean;
  shouldLoadMore: boolean;
};

const useHandleInfiniteScroll = ({ listPets }: IProps) => {
  const { pageNo, totalPages, last } = useAppSelector((state) => state.Pets);

  const handleLoadMore = () => {
    const nextPage = pageNo + 1;
    if (nextPage <= totalPages) {
      listPets(nextPage);
    }
  };

  const checkScroll = (
    scrollTop: number,
    clientHeight: number,
    scrollHeight: number,
    threshold: number,
  ): ScrollVerificationResult => {
    const isScrollingDown = scrollTop + clientHeight >= scrollHeight - threshold;
    const shouldLoadMore = isScrollingDown;

    return {
      isScrollingDown,
      shouldLoadMore,
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10;
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      const { shouldLoadMore } = checkScroll(scrollTop, clientHeight, scrollHeight, scrollThreshold);

      if (shouldLoadMore && !last) {
        handleLoadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageNo, totalPages]);
};

export default useHandleInfiniteScroll;
