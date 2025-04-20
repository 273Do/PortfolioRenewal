import React from "react";

import { Separator } from "@/components/ui/separator";
import MarqueeWidget from "@/features/Marquee/components/Marquee";

const demoData = [
  {
    id: 1,
    name: "React",
    description: "JavaScript library for building user interfaces",
  },
  {
    id: 2,
    name: "Next.js",
    description: "React framework for server-rendered applications",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
  },
];

const Detail = () => {
  return (
    <div className="flex size-full flex-row items-start justify-center">
      <div className="m-3 flex w-full max-w-[700px] flex-wrap sm:m-4">
        {/* MEMO: 本文 */}
        <div className="flex size-full flex-col gap-5">
          <div>
            <div className="flex items-center justify-between text-muted-foreground">
              <p>2024/04/01</p>
              <p>期間：3ヶ月</p>
            </div>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur repellat tempore nesciunt voluptatum magni nemo animi
              odio accusamus dolor, perspiciatis ullam iste reprehenderit
              exercitationem facere quis unde eum atque deserunt similique
              distinctio numquam consectetur sed. Quos, neque similique. Quam,
              ipsum rerum, itaque odio vitae tempore et quis neque tempora
              provident fuga inventore debitis, voluptatem ea fugiat nihil
              distinctio. Quae illum in inventore modi unde ipsa! Voluptas fuga
              a quisquam minus, totam repellendus, accusamus excepturi debitis
              dolor incidunt eius quidem quia? Fugit doloremque vero amet in aut
              natus esse fuga tempora, nihil earum ipsa doloribus, sunt sed
              laboriosam iste. Magnam fuga saepe eligendi doloremque fugit
              eveniet nesciunt sint tempore, reiciendis itaque! Aliquid, iusto
              labore laudantium in inventore adipisci. Dignissimos ipsa eveniet,
              possimus ullam inventore magni nisi recusandae tempora deleniti
              autem iste. Nostrum iste autem sunt maxime necessitatibus omnis
              ullam quis adipisci eum! Inventore, rem doloremque reiciendis
              fugiat praesentium, libero distinctio qui iusto quo odit
              voluptatum eius dolor labore rerum sit beatae ullam voluptates
              natus iure. Quaerat reprehenderit culpa non vero eos minima
              temporibus, odio, cumque ipsa adipisci saepe porro quae sit
              dolores unde deserunt voluptas error recusandae assumenda. Velit
              in aspernatur reprehenderit deleniti voluptatum ipsum sequi ea
              ullam praesentium tempora! Dolores quidem quaerat tenetur
              architecto laudantium rem, obcaecati ex quo temporibus nemo atque
              quibusdam et, soluta ratione adipisci alias necessitatibus impedit
              veniam enim minus amet doloremque, deserunt neque. Facilis illo
              reprehenderit fugit, praesentium at error assumenda dolor delectus
              dolore dolores voluptatem maiores aspernatur eum facere quod
              doloremque minima suscipit! Eos, debitis blanditiis. Quam dolor
              dolorem voluptatum sequi magnam, et rem, aliquid culpa pariatur
              ullam sunt cupiditate iure! Optio accusamus eum odit totam
              distinctio cum, tempore enim neque qui eius similique laborum
              error, repellendus ab vel vitae ex obcaecati, ullam aliquam non!
              Ex, est saepe ad voluptas ab aspernatur exercitationem voluptates
              voluptatum amet ut perspiciatis nemo sunt tempore odio earum
              recusandae ipsum? Fuga consequuntur fugiat quidem cupiditate et
              voluptate provident cum. Quae iste recusandae, dolores quidem
              optio magni voluptates impedit hic? Quos, magni eveniet commodi id
              dolore ratione debitis quis? Nesciunt quis doloribus placeat
              voluptas saepe laboriosam quam eos impedit numquam cupiditate a
              modi veniam, illo suscipit dolores soluta deserunt amet
              accusantium officiis rerum repellendus. Ut, doloremque id! Fugit,
              suscipit hic exercitationem necessitatibus aut optio beatae eos
              laboriosam quo doloribus temporibus aperiam commodi culpa.
              Facilis, soluta aperiam! Soluta ea, similique nisi dignissimos et
              praesentium autem, aliquid itaque impedit minus aperiam dolor
              reprehenderit libero, distinctio provident commodi omnis cum neque
              dolorem facere! Beatae maxime ipsam pariatur fugit quam rerum
              nesciunt vero dolorem consequatur itaque qui quas mollitia
              exercitationem incidunt, reprehenderit omnis hic ratione est
              labore at, unde odit esse animi soluta? Dicta iste excepturi,
              quaerat, cupiditate quo officiis non laboriosam ratione
              repudiandae eum vitae autem ullam, provident similique et atque
              fuga quae ea totam dolore itaque quia earum? Quisquam quasi
              possimus sunt odit quis saepe expedita. Vitae modi et quae harum
              nisi architecto autem quia placeat vel. Incidunt vitae vel qui
              unde eius, expedita sunt mollitia quisquam aliquam quam illum
              reprehenderit, culpa magnam dignissimos molestiae. Nostrum nobis
              dignissimos ipsam deserunt sapiente, porro tempore dolor. Dolores
              explicabo reiciendis ducimus aliquid veniam voluptate debitis ex
              similique ipsam magnam ab repellendus, quisquam corrupti quos quam
              fugiat. Magnam, deserunt error fuga consectetur totam pariatur
              ipsam dolore quaerat dolor voluptatibus saepe dolorum, excepturi,
              ullam vitae? Dignissimos aliquam iure corporis tempore
              praesentium. Cum consequatur, aspernatur nesciunt ex debitis in
              eligendi eos quidem dolore. Itaque, quasi hic. Pariatur eaque
              aliquid vero! Eligendi reiciendis neque ipsum, dolorem, voluptatem
              asperiores amet laudantium eveniet, officia illum sequi minus
              perspiciatis voluptas tempora molestias cupiditate dolores facilis
              natus! Eligendi nisi doloribus iure eos non. Aliquid commodi
              architecto reprehenderit. Rem laudantium totam est debitis
              corporis soluta voluptates accusamus commodi ex doloribus impedit,
              aut aliquid corrupti nihil voluptate hic vero velit repellat
              labore culpa unde sequi magnam iste? Nemo officia eveniet nam
              nostrum error iure earum perferendis! Dolor libero provident
              cupiditate recusandae illo velit qui iure sed nihil repudiandae
              alias beatae consectetur nulla repellendus accusantium minus,
              magnam minima deleniti eveniet, distinctio quam. Illum,
              repudiandae beatae, assumenda itaque rem laboriosam, possimus
              incidunt suscipit id cupiditate explicabo molestias voluptatem?
              Nesciunt est aut aspernatur ipsa ullam repudiandae amet deserunt
              reprehenderit numquam dolorum neque excepturi saepe, quia nobis
              ducimus quaerat totam nisi non. Iure nisi autem optio accusamus
              cupiditate, voluptas ad vitae suscipit aut est numquam eveniet rem
              quod obcaecati. Consequuntur nam eius ad, mollitia quos at
              cupiditate necessitatibus libero architecto cum quas dolorem,
              ipsum provident unde alias soluta deleniti enim facere? Vero
              voluptatum illo nam commodi eveniet vitae aut deleniti magni natus
              incidunt sunt culpa eum quas dignissimos unde ipsum hic ex est
              ipsa ratione tempore ad, architecto corporis. Maiores blanditiis
              fugit totam repudiandae ea dolorum dolorem odit libero
              exercitationem vel optio perferendis facere, aperiam id illo
              error, aliquam ex tenetur, dolore temporibus. Sequi, repellendus
              culpa dignissimos autem, recusandae quaerat eaque eveniet neque
              officiis laborum cum dicta! Ex eius corrupti nihil assumenda,
              magnam optio mollitia cupiditate reprehenderit ab fugit totam
              saepe nulla placeat aut a, earum eligendi temporibus asperiores
              necessitatibus laboriosam iure quisquam dicta illum voluptatum.
              Eveniet nemo quaerat doloremque tempora, sint delectus, ex soluta
              corrupti error ut iusto consequatur eum voluptas numquam debitis
              vitae quo fuga dolores totam alias maiores sed exercitationem a
              consequuntur. Molestias accusantium aliquid dolor minima facere
              est voluptates, voluptate quis quia, neque consequuntur sint.
              Necessitatibus, quasi. Earum quas qui mollitia, excepturi minima
              ea laboriosam rerum distinctio sed recusandae, necessitatibus, sit
              perspiciatis blanditiis inventore deleniti ipsa? Eius temporibus
              natus perspiciatis? Ea iste doloribus est voluptatum id soluta
              neque modi. Consequuntur voluptatibus ipsam delectus quas eos
              aperiam explicabo eum quis temporibus nulla natus libero omnis
              culpa, ipsa incidunt nihil, reiciendis, vero ullam amet dolorum.
              Nesciunt ullam nisi voluptatum molestias facere aliquam, nihil
              beatae, natus accusamus consequuntur, placeat ducimus impedit
              repellendus dolore. Vero fugit dicta, reiciendis officiis, eum
              omnis quae alias blanditiis itaque nisi necessitatibus ratione
              deleniti. Cupiditate expedita enim maxime voluptatibus explicabo
              excepturi at, quo libero in eveniet quos doloribus deserunt
              consequatur eos aspernatur, optio eius beatae nihil? Error
              delectus harum ab dolore natus, facere aliquam minus.
            </p>
          </div>
          <Separator />
          <div>
            <div className="flex items-center justify-between"></div>
            <div className="mb-6">
              <MarqueeWidget technologyData={demoData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
