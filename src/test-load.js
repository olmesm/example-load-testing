import http from "k6/http";
import { check, sleep } from "k6";

const REQ_PER_SECOND = 10;

export let options = {
  vus: REQ_PER_SECOND,
  duration: "30s",
};

export default function () {
  let res = http.get("http://0.0.0.0:3000");
  check(res, { "status was 200": (r) => r.status == 200 });
  sleep(1);
}
