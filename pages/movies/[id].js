import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter;
  console.log(router);
  return "detail";
}

// 이 파일의 url => /movies/124568293(전달받은 id)
