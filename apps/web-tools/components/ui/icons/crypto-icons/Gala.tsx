import * as React from "react";
import type { SVGProps } from "react";
const SvgGala = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <rect width={56} height={56} fill="#fff" rx={28} />
    <g
      fill="#000"
      fillRule="evenodd"
      clipPath="url(#GALA_svg__a)"
      clipRule="evenodd"
    >
      <path d="M14.389 35.331c.39.207.902.522 1.268.765.134.091.287.17.433.261.08.049.128.073.201.121.037.025.067.05.104.067.043.025.067.037.11.061l4.694 2.877c.067.036.128.079.202.121l4.262 2.616c.048.03.067.037.11.067l2.036 1.244c.091.049.128.11.231.116V27.805l-.646-.37c-.06-.03-.097-.055-.159-.091l-.505-.291c-.72-.377-1.39-.838-2.116-1.214-.073-.037-.098-.06-.177-.097l-.646-.37c-.159-.098-.878-.529-1.006-.559v2.5l2.646 1.524c.073.043.122.073.189.11.073.036.11.078.201.096v10.725c-.463-.31-.957-.589-1.433-.874l-1.152-.71c-.47-.316-.976-.576-1.445-.886-.055-.037-.086-.049-.14-.085l-1.019-.625c-.11-.06-.189-.11-.292-.182-.372-.25-.775-.468-1.153-.71-.103-.067-.189-.11-.292-.176-.561-.377-1.165-.717-1.738-1.063q-.072-.045-.134-.09l-.445-.274V21.22a5 5 0 0 0-.268-.158 6 6 0 0 1-.269-.158l-1.372-.777c-.103-.054-.183-.115-.28-.163zM29.357 27.781v6.088l.811-.455c.372-.195.714-.431 1.085-.626.068-.036.092-.048.14-.084.05-.03.098-.05.147-.073v-3.587a.4.4 0 0 0 .152-.067c.055-.037.092-.049.147-.08.286-.163.567-.357.86-.503.396-.194.774-.437 1.152-.661.098-.055.177-.104.28-.164l.574-.322.14-.085c.25-.127.481-.297.738-.43l.28-.165c.049-.03.098-.048.146-.073l1.872-1.08c.396-.206.762-.455 1.152-.662l.58-.34c.195-.115.384-.218.579-.34.104-.06.189-.102.28-.163l.305-.17v10.385c-.085.018-.11.048-.183.09l-.536.328c-.055.037-.098.067-.165.11-.073.042-.122.079-.183.115-.067.036-.103.067-.17.103l-.543.322c-.488.28-.945.595-1.433.874l-1.427.88c-.067.043-.103.06-.17.103-.64.431-1.323.79-1.97 1.208-.116.079-.237.146-.353.218l-1.787 1.093c-.055.03-.116.067-.17.103-.531.346-1.086.644-1.616.99l-.726.443v2.549c.122-.03.317-.176.427-.243.146-.091.287-.164.433-.261.408-.273.853-.498 1.262-.77.08-.05.14-.092.213-.134l1.08-.662c.073-.042.128-.079.2-.121l5.744-3.52.214-.134 3.835-2.349q.11-.073.22-.128V19.989c-.11.024-.129.06-.214.11-.08.042-.134.072-.208.114l-1.274.735c-.433.23-.835.516-1.274.734l-3.408 1.955c-.153.085-.275.163-.421.248l-.628.365a22 22 0 0 0-1.5.861c-.073.05-.134.067-.207.116l-1.384.801c-.061.03-.05.03-.11.067l-.433.236c-.256.134-.482.298-.738.431-.06.03-.06.043-.11.067l-.432.237c-.287.14-1.043.668-1.275.716M15.236 18.944c.086.018.134.067.214.11.286.15.542.333.835.479l2.317 1.335c1.104.668 2.25 1.262 3.36 1.93l.207.115c.08.043.134.08.207.116l1.262.728c.055.03.049.03.092.055.591.358 1.213.661 1.798 1.031l1.878 1.075c.073.042.128.079.201.121.22.134 1.006.607 1.086.607.116 0 .786-.425.957-.528l.33-.194c.109-.067.206-.11.316-.176l.317-.182.64-.377c.11-.066.208-.115.311-.182l.97-.546c.06-.03.104-.06.159-.09.054-.037.09-.056.158-.092l.646-.37c.104-.06.22-.152.342-.182-.019-.073-.03-.067-.092-.104L31.68 22.44c-.823.43-1.603.935-2.42 1.378a2 2 0 0 0-.183.115 8 8 0 0 1-.378.219l-1.244-.717c-.433-.218-.83-.503-1.262-.728-.098-.055-.195-.115-.28-.164L23.387 21.1l-.14-.085c-.055-.037-.091-.049-.146-.08l-3.232-1.857c-.06-.036-.067-.054-.152-.072.067-.098.146-.104.256-.17.091-.061.177-.091.274-.146l2.811-1.511c.061-.037.061-.043.122-.073.06-.03.091-.043.146-.079.098-.06.195-.103.293-.152l3.506-1.881c.06-.03.079-.049.14-.085l1.427-.759c.079 0 1.158.625 1.408.753.061.03.104.048.165.085.073.042.091.06.177.097l3.877 2.082c.342.212 1.378.752 1.744.934.415.207.811.455 1.226.662l2.304 1.244c.08.043.104.055.177.097.275.164.28.024.726-.218l.823-.468c.146-.079.701-.43.83-.46-.025-.08-.099-.11-.172-.153l-.835-.455c-.42-.212-.841-.473-1.262-.674l-.835-.455c-.287-.145-.574-.279-.842-.449l-4.213-2.264c-.085-.042-.134-.067-.207-.115l-1.695-.91c-.08-.043-.128-.073-.207-.116-.043-.024-.061-.03-.098-.048l-2.226-1.202c-.14-.085-.792-.45-.871-.45-.067 0-.537.28-.64.328l-4.823 2.598a2 2 0 0 0-.214.11l-3.378 1.814c-.079.043-.116.073-.207.116l-.305.163c-.06.03-.06.043-.11.067-.067.043-.14.06-.213.11l-.646.345c-.086.043-.128.08-.207.116l-.982.534c-.037.018-.037.012-.067.03-.14.079-.287.134-.42.225-.08.048-.129.066-.214.109l-.945.522c-.074.042-.055.006-.08.091" />
    </g>
    <defs>
      <clipPath id="GALA_svg__a">
        <path fill="#fff" d="M11.667 11.667h32.667v32.667H11.667z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGala;
