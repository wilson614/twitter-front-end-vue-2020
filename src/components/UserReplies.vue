<template>
  <div class="user-reply-container d-flex justify-content-center">
    <ul class="user-reply-list">
      <li v-for="reply in replies" :key="reply.id" class="reply-item d-flex">
        <div class="user-avatar">
          <img
            class="avatar"
            src="https://loremflickr.com/240/240/?random=44.498223728686305"
          />
        </div>
        <div class="user-reply-main">
          <div class="user-info">
            <span class="user name">John Doe</span>
            <a href="" class="user account">@heyjohn</a>
            <span class="seperater">•</span>
            <span class="user created-at">{{ reply.createdAt | fromNow}}</span>
          </div>
          <div class="replay-to d-flex align-items-center">
            <span class="reply-title">回覆</span>
            <a class="reply-account" href="">@Daniel</a>
          </div>
          <p class="reply-content">{{ reply.comment }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

const dummyData = [
  {
    id: 1,
    UserId: 2,
    TweetId: 1,
    comment: "illo",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 1,
      UserId: 2,
      description: "necessitatibus dolore iure",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 12,
    UserId: 2,
    TweetId: 4,
    comment:
      "Rem molestiae quos eos rerum ut quis quo qui rerum. Aut ut aperiam mollitia architecto sunt excepturi. Esse nulla sequi voluptatibus voluptates. Ut cumque qui distinctio aliquam consequatur eos ea ipsa.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 4,
      UserId: 2,
      description:
        "Fugit aliquam sint non repellendus explicabo. Unde sit provident non reprehenderit quas non ut totam. Excepturi voluptates eum est harum voluptas quam quod. Est incidunt voluptatem vitae veniam dolores sapiente numquam eveniet. Aut hic placeat ipsa deleniti praesentium consectetur reprehenderit repudiandae. Cum dolorem saepe delectus aut corrupti aut dolores nulla fuga.\n \rQui asperiores quos. Tenetur laboriosam tempora non non quisquam est repellendus. Asperiores natus occaecati est ex ut repellat. Ut quia perferendis voluptatem.\n \rUt id sunt eligendi. Excepturi impedit nihil error et ab unde voluptas quo magnam. Quo ratione perspiciatis illo dolor quia voluptatem recusandae quia et. Ut unde optio est delectus quaerat. Ea fuga pariatur magni alias.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 17,
    UserId: 2,
    TweetId: 6,
    comment: "facilis consequatur placeat",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 6,
      UserId: 2,
      description:
        "Molestiae consequatur laudantium porro qui vel hic tenetur maiores.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 33,
    UserId: 2,
    TweetId: 11,
    comment:
      "Velit rem aliquam magnam.\nRatione quos rem error ipsam.\nNesciunt nobis qui eveniet aperiam amet.\nOdit reiciendis sed eos quam quis asperiores.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 11,
      UserId: 3,
      description:
        "A temporibus quis quas voluptatem. Suscipit tempora aliquid at dolor voluptatem adipisci earum quia. Et quisquam voluptatem officia nam temporibus sed aut laboriosam. Et quo nisi quas itaque rerum. Voluptatem at et quam incidunt sint fugiat est.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 35,
    UserId: 2,
    TweetId: 12,
    comment:
      "Id suscipit dolor sed aut ratione sequi ab voluptatum consequatur.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 12,
      UserId: 3,
      description:
        "Ad repudiandae vitae nihil ut eligendi doloremque nesciunt. Consectetur eum dolorem. Voluptates ullam veniam.\n \rEt illo cupiditate nesciunt magni eum nesciunt delectus. Molestias hic consequuntur asperiores quia ut. Et tempore qui illo. Rerum assumenda error temporibus molestias neque facere accusamus natus. Ex qui quidem dolorem quis eum.\n \rNostrum quae et eum rem qui omnis maiores. Placeat omnis ut non. Soluta accusantium dicta est. Est aspernatur et. Sed quos nam in accusantium est. Architecto consequatur mollitia culpa laudantium a consectetur veritatis earum.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 43,
    UserId: 2,
    TweetId: 15,
    comment: "aut fugit tempore",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 15,
      UserId: 3,
      description:
        "Nostrum reiciendis ex nisi ad. Enim aperiam libero in nostrum est veniam numquam. Qui quia quam architecto dolorem nesciunt omnis enim dolor. Magni animi dolor ratione quidem iusto mollitia omnis esse explicabo. Et quidem ut assumenda ad aut sed nesciunt quod labore.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 47,
    UserId: 2,
    TweetId: 16,
    comment:
      "Odit eveniet est. Eligendi voluptate nihil ut. Et consequatur incidunt. Ex neque dicta est.\n \rId mollitia cum soluta id sit. Dolores quis doloribus veritatis sint voluptates. Aliquid occaecati architecto libero dolorem temporibus cumque incidunt facilis. Aut sunt ea omnis molestiae consequatur distinctio. Eos aut enim quaerat non voluptatem optio iusto eveniet inventore. Exercitationem tempora quo neque similique dolor.\n \rTemporibus pariatur est reprehenderit corporis. Cumque sit mollitia dolor mollitia nam esse beatae. Error reprehenderit amet qui beatae possimus non enim modi. Cum unde dignissimos amet dolorem officiis molestiae sed assumenda. Minima sint eius qui asperiores laboriosam ullam nemo.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 16,
      UserId: 3,
      description: "mollitia quia aliquam",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 49,
    UserId: 2,
    TweetId: 17,
    comment: "ratione sunt velit",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 17,
      UserId: 3,
      description: "atque",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 50,
    UserId: 2,
    TweetId: 17,
    comment: "velit",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 17,
      UserId: 3,
      description: "atque",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 51,
    UserId: 2,
    TweetId: 17,
    comment: "Aut quis unde voluptatum natus quo nam tempora.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 17,
      UserId: 3,
      description: "atque",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 53,
    UserId: 2,
    TweetId: 18,
    comment:
      "Voluptates eum debitis sunt voluptatibus. Necessitatibus est ut rerum temporibus. Ut omnis quam odit quibusdam autem. Recusandae voluptatem aut aliquid possimus odio voluptates dignissimos animi. Tenetur sed id delectus. Dolore quos ex earum sint perspiciatis dolores dicta beatae provident.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 18,
      UserId: 3,
      description:
        "Aut omnis consequatur blanditiis. Sed dignissimos quo asperiores iure ipsum et magni nobis. Eligendi expedita explicabo voluptatem corporis a ratione excepturi nesciunt. Excepturi sunt laudantium et.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 55,
    UserId: 2,
    TweetId: 19,
    comment: "occaecati adipisci sit",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 19,
      UserId: 3,
      description:
        "Architecto quasi porro magni aliquid facere. Ex sunt incidunt suscipit et ducimus ab similique ut ratione. Voluptatibus cumque error praesentium in occaecati illo labore explicabo. Et delectus nesciunt quo debitis earum.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 58,
    UserId: 2,
    TweetId: 20,
    comment: "nobis iste minima",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 20,
      UserId: 3,
      description: "at ut iure",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 69,
    UserId: 2,
    TweetId: 23,
    comment:
      "Qui repellendus dignissimos nemo sed voluptatum labore et quaerat.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 23,
      UserId: 4,
      description:
        "Iste tempora repellat et optio fuga quod velit deleniti. Amet quasi laudantium voluptatem laboriosam. Eveniet natus est magnam. Atque ea quas laudantium repellendus harum. Et consequatur sed qui commodi ullam quae. Voluptatem sapiente dolor commodi omnis error ea magnam.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 81,
    UserId: 2,
    TweetId: 27,
    comment: "adipisci et iusto",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 27,
      UserId: 4,
      description:
        "Dolor sit sapiente est ea labore omnis. Omnis quod numquam ut omnis. Nihil mollitia explicabo aspernatur architecto et. Esse tenetur nobis vero fuga adipisci.\n \rOdit sit nihil quasi aut rerum eveniet molestiae tenetur. Soluta autem hic dignissimos. Enim itaque et.\n \rQuam aliquid quos sit qui facere distinctio quia dolores. Vero deleniti in delectus consectetur totam provident. Nisi quo consequatur voluptatem architecto sint sunt. Qui suscipit esse non. Impedit consequatur ea. Ut dolorem voluptatibus.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 82,
    UserId: 2,
    TweetId: 28,
    comment: "Aut facere et velit doloribus possimus facere minus vel.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 28,
      UserId: 4,
      description: "qui",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 85,
    UserId: 2,
    TweetId: 29,
    comment:
      "Officiis rerum cupiditate dolores quis. Corrupti sed sit. Consequatur in voluptate quam odit et quia repellendus est. Molestias reiciendis quia enim. Quidem qui magnam enim a qui ut tempora. Temporibus sit adipisci.\n \rIure voluptates voluptatum sed dignissimos dolor aut. Natus ut rerum tempore sed assumenda. Est officia enim distinctio sit quia. Vel expedita iure quae ullam eos dolores. Perferendis mollitia consequuntur earum dolor deleniti nobis voluptatibus.\n \rAliquid tempore omnis sed quia doloribus ad ab facere deleniti. Amet consequatur id ducimus id mollitia. Nobis maxime quisquam nihil culpa.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 29,
      UserId: 4,
      description: "Asperiores voluptas a optio dolorem et.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 92,
    UserId: 2,
    TweetId: 31,
    comment: "quae",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 31,
      UserId: 5,
      description: "Et et ipsa vero eaque.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 101,
    UserId: 2,
    TweetId: 34,
    comment: "quae et est",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 34,
      UserId: 5,
      description:
        "Aspernatur rerum harum beatae dolore.\nVoluptatem totam vero ut at iste.\nUt vitae consequuntur exercitationem.\nEligendi quos inventore.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 102,
    UserId: 2,
    TweetId: 34,
    comment:
      "Porro quis totam sit consectetur rerum. Excepturi rerum blanditiis culpa nobis eos reprehenderit ut quos tenetur. Eum velit sunt autem omnis et. Eos optio est autem quae provident. Sapiente corporis praesentium voluptates fugiat. Quis quo maiores sed mollitia.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 34,
      UserId: 5,
      description:
        "Aspernatur rerum harum beatae dolore.\nVoluptatem totam vero ut at iste.\nUt vitae consequuntur exercitationem.\nEligendi quos inventore.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 104,
    UserId: 2,
    TweetId: 35,
    comment: "ducimus",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 35,
      UserId: 5,
      description:
        "Quia aut quia quia sed. Beatae impedit veniam dolor voluptatem ut corporis ratione. Sunt omnis ipsa quo voluptatum magni odio blanditiis.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 107,
    UserId: 2,
    TweetId: 36,
    comment: "Non enim vero adipisci nesciunt veniam consequatur.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 36,
      UserId: 5,
      description:
        "Ut distinctio facere odit nihil unde sunt. Et culpa veritatis numquam quia quis. Rerum minima sit vel dolor.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 111,
    UserId: 2,
    TweetId: 37,
    comment: "qui dolorem voluptas",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 37,
      UserId: 5,
      description:
        "Fugit quis consequatur aut est aut. Non alias et reprehenderit explicabo expedita qui. Aut omnis quia inventore autem dolores sunt non. Tempore voluptas ipsam porro. Consequatur eum beatae nulla qui veritatis cum.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 112,
    UserId: 2,
    TweetId: 38,
    comment:
      "Rerum beatae velit omnis dignissimos nemo animi error nisi delectus.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 38,
      UserId: 5,
      description: "Minima consequatur facilis eos iure nisi alias.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 124,
    UserId: 2,
    TweetId: 42,
    comment: "unde",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 42,
      UserId: 6,
      description: "harum",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 129,
    UserId: 2,
    TweetId: 43,
    comment:
      "Non enim quia. Maiores omnis unde iure libero minima autem. Enim veritatis et. Enim consequuntur architecto nihil voluptatem consequatur vel quis voluptas at. Et quaerat quis repudiandae quos et doloremque recusandae incidunt ducimus. Numquam voluptatem aut quaerat iste at explicabo ex beatae laboriosam.\n \rCorporis rem sit qui. Maiores rerum aliquid est numquam sed error. Omnis molestiae qui iste dignissimos architecto at. Quis expedita consectetur reiciendis et neque. Nesciunt sit est molestiae consectetur et qui illo rerum architecto. Nostrum ipsam culpa aut quo debitis ipsa maiores alias.\n \rRepudiandae illum quos ipsa maiores qui amet fugiat. Tempora magnam corporis in aut quo consequatur ipsa consectetur. Laborum debitis modi mollitia voluptas. Sed ex iusto sapiente sed quia veniam reiciendis rerum.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 43,
      UserId: 6,
      description:
        "Magnam est magni consequatur consequatur.\nEaque saepe quo qui id minus earum culpa commodi.\nNisi quo eius.\nCumque sunt enim cum odit tenetur sequi.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 130,
    UserId: 2,
    TweetId: 44,
    comment:
      "Doloremque et aut non non illum eaque asperiores et cupiditate.\nNobis qui atque dolor qui consequatur.\nIllum itaque et nulla eos sit veritatis culpa.\nAperiam possimus repudiandae.\nVelit ea optio autem.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 44,
      UserId: 6,
      description:
        "Error officia aperiam exercitationem voluptas sequi sunt est consequuntur. Exercitationem ut aut. Illo corrupti reiciendis ut. Velit quo minus qui id quo.\n \rNobis est sit quisquam ipsum maiores nobis molestiae ipsum qui. Et sunt voluptate sit et repellat. Aut tenetur tenetur vel beatae aliquid sapiente sit dolor. Qui et dolores excepturi sed et.\n \rIpsum exercitationem quaerat. Voluptatibus cupiditate voluptatibus sit quasi aut perferendis non. Iusto molestiae repudiandae reiciendis quia natus. Modi et repudiandae ab iste nobis repellat. Provident et aut.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 132,
    UserId: 2,
    TweetId: 44,
    comment:
      "Voluptatem et maiores et sunt voluptas tempora eveniet et asperiores. Nihil cum quasi atque. Ipsam rem ducimus possimus. Est quaerat sint. Sit sed corrupti quaerat nihil nemo aliquam.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 44,
      UserId: 6,
      description:
        "Error officia aperiam exercitationem voluptas sequi sunt est consequuntur. Exercitationem ut aut. Illo corrupti reiciendis ut. Velit quo minus qui id quo.\n \rNobis est sit quisquam ipsum maiores nobis molestiae ipsum qui. Et sunt voluptate sit et repellat. Aut tenetur tenetur vel beatae aliquid sapiente sit dolor. Qui et dolores excepturi sed et.\n \rIpsum exercitationem quaerat. Voluptatibus cupiditate voluptatibus sit quasi aut perferendis non. Iusto molestiae repudiandae reiciendis quia natus. Modi et repudiandae ab iste nobis repellat. Provident et aut.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 133,
    UserId: 2,
    TweetId: 45,
    comment:
      "Quam est quia maiores. Tempora et doloribus voluptatum. Rerum ea nesciunt enim ut dolores nobis soluta unde. Tenetur nihil a alias corrupti sunt. Et et facere omnis.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 45,
      UserId: 6,
      description: "aut",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
  {
    id: 145,
    UserId: 2,
    TweetId: 49,
    comment:
      "Et maxime aperiam ad dolores recusandae fugit voluptas. Sunt consectetur in mollitia. Natus nostrum incidunt dicta eos et.",
    createdAt: "2021-09-16T02:37:31.000Z",
    updatedAt: "2021-09-16T02:37:31.000Z",
    Tweet: {
      id: 49,
      UserId: 6,
      description:
        "Aut necessitatibus sed nostrum necessitatibus quia et exercitationem. Aut sed aut est doloribus. Maxime quis possimus qui rem voluptas omnis iste quis. Sint aliquid cupiditate facilis et id odio iusto tenetur qui. Et voluptatem provident quibusdam voluptatem quisquam quas dolore.",
      likeCount: 0,
      replyCount: 3,
      createdAt: "2021-09-16T02:37:31.000Z",
      updatedAt: "2021-09-16T02:37:31.000Z",
    },
  },
];

export default {
  mixins: [fromNowFilter],
  data() {
    return {
      replies: [],
    };
  },
  created() {
    this.fetchReplies();
  },
  methods: {
    fetchReplies() {
      this.replies = dummyData;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-reply-container,
.user-reply-list {
  width: 100%;
}
.reply-item {
  padding: 10px 15px;
  border-bottom: 1px solid $popular-border;
}
.user-avatar {
  padding: 4px 10px 0 0;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}

.user-reply-main {
  .user-info {
    span,
    a {
      display: inline-block;
    }
    .name {
      font-size: 15px;
      font-weight: 700;
      margin-right: 8px;
    }
    .account,
    .seperater,
    .created-at,
    .reply-account {
      font-size: 15px;
      font-weight: 500;
      color: $input-placeholder;
    }
  }
  .reply-title {
    font-size: 15px;
    font-weight: 500;
    color: $input-placeholder;
    margin-right: 4px;
  }
  .reply-account {
    color: $button-color;
  }
  .reply-content {
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>
