<template>
  <Layout>
    <section id="about" class="space-y-12">
      <div class="flex flex-wrap">
        <div class="flex w-full md:w-2/4">
          <div class="block m-auto px-5 py-3">
            <h2
              class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate mb-5"
            >
              О нас
            </h2>
            <p class="leading-7">
              Теперь, чтобы организовать деловое мероприятие, нужно
              по-настоящему много работать. При отсутствии специальных знаний в
              этой области лучше всего обратиться в специальную компанию,
              которая может предоставить целую команду профессионалов, которые
              готовы взяться за организацию проекта и могут выполнить его на
              100%.
            </p>
          </div>
        </div>
        <div class="block w-full md:w-2/4">
          <g-image
            :alt="aboutSection.image_1.alt"
            :src="aboutSection.image_1.image"
            class="object-cover p-8 m-auto w-full"
            style="border-radius: 2.5rem; height: 350px"
          />
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="block w-full md:w-2/4">
          <swiper
            class="swiper"
            :options="swiperOption"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <swiper-slide
              v-for="photo in $page.fullPage.edges[0].node.aboutSection
                .carousel"
              :key="photo.id"
            >
              <g-image :alt="photo.alt" :src="photo.image" />
            </swiper-slide>
          </swiper>
        </div>
        <div class="flex w-full md:w-2/4">
          <div class="block m-auto px-5 py-3">
            <p class="leading-7">
              AVANTAGE относится к таким компаниям, которые могут взять на себя
              задачу организации и проведения любого типа мероприятия, а также
              предоставить в аренду лучшее оборудование, позволяющее проводить
              качественные и интересные мероприятия.
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap">
        <div class="flex w-full md:w-2/4">
          <div class="block m-auto px-5 py-3 leading-7 space-y-5">
            <p>
              Мы готовы предоставить нашим клиентам полный спектр услуг, от
              разработки концепции до реализации и реализации мероприятий.
            </p>
            <p>
              Выставки, форумы, конференции, презентации, кейтеринг,
              организованные AVANTAGE, позволяют нашим Клиентам достигать своих
              целей и отмечены положительными отзывами участников и посетителей.
            </p>
            <p>
              Мы готовы эффективно применить наш опыт в организации любого
              формата деловых мероприятий в интересах вашей компании.
            </p>
            <hr />
            <button
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-700 active:bg-red-700 transition duration-150 ease-in-out"
            >
              Портфолио
            </button>
          </div>
        </div>
        <div class="block w-full md:w-2/4">
          <video
            playsinline="playsinline"
            preload="none"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source :src="aboutSection.video" type="video/mp4" />
          </video>
        </div>

        <div
          class="w-full mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt
                  class="text-sm leading-5 font-medium text-gray-500 truncate"
                >
                  Лет
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  11
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt
                  class="text-sm leading-5 font-medium text-gray-500 truncate"
                >
                  Почетных грамот
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  7
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt
                  class="text-sm leading-5 font-medium text-gray-500 truncate"
                >
                  Проектов
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  200+
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt
                  class="text-sm leading-5 font-medium text-gray-500 truncate"
                >
                  Недовольных клиентов
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  0%
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="equipment">
      <h2
        class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate mb-5"
      >
        Аренда оборудований
      </h2>
      <div class="relative flex items-center justify-between">
        <div class="max-w-xs w-full">
          <label for="search" class="sr-only">Search</label>
          <div class="relative">
            <div
              class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center"
            >
              <!-- Heroicon name: search -->
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              name="search"
              id="search"
              class="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              placeholder="Search"
              type="search"
            />
          </div>
        </div>
        <button
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:shadow-outline-red focus:border-red-700 active:bg-red-700 transition duration-150 ease-in-out"
        >
          Корзинка
          <span
            class="ml-2 inline-flex items-center px-1 py-0.5 rounded-md text-sm font-medium leading-5 bg-gray-100 text-gray-800"
          >
            12
          </span>
        </button>
      </div>
      <div class="navs mb-5">
        <div class="lg:hidden">
          <select
            aria-label="Selected tab"
            class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 transition ease-in-out duration-150"
          >
            <option v-for="tag in tags" :key="tag.node.id">
              {{ tag.node.title }}
            </option>
            <option selected>Team Members</option>
          </select>
        </div>
        <div class="hidden lg:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex">
              <a
                href="#"
                v-for="tag in tags"
                :key="tag.node.id"
                class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300"
              >
                {{ tag.node.title }}
              </a>
              <a
                href="#"
                class="whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-red-500 font-medium text-sm leading-5 text-red-600 focus:outline-none focus:text-red-800 focus:border-red-700"
                aria-current="page"
              >
                Team Members
              </a>
            </nav>
          </div>
        </div>
      </div>

      <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <li
          class="col-span-1 bg-white rounded-lg shadow"
          v-for="(equipment, index) in tags[1].node.equipments"
          :key="index"
        >
          <div class="flex flex-col justify-end" style="height: 100%">
            <div>
              <g-image
                class="w-full object-contain"
                style="max-height: 300px"
                :src="equipment.img"
                alt=""
              />
              <div
                class="w-full flex items-center justify-between p-6 space-x-6"
              >
                <h3
                  class="text-gray-900 text-sm leading-5 font-medium truncate"
                >
                  Jane Cooper
                </h3>
              </div>
            </div>
            <div class="border-t border-gray-200">
              <div class="-mt-px flex">
                <div class="w-0 flex-1 flex border-r border-gray-200">
                  <a
                    href="#"
                    class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <!-- Heroicon name: mail -->
                    <svg
                      class="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path
                        d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                      />
                    </svg>
                    <span class="ml-3">Email</span>
                  </a>
                </div>
                <div class="-ml-px w-0 flex-1 flex">
                  <a
                    href="#"
                    class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
                  >
                    <!-- Heroicon name: phone -->
                    <svg
                      class="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                      />
                    </svg>
                    <span class="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <!-- <video class="lozad" data-poster="~/favicon.png">
      <source
        :data-src="$page.fullPage.edges[0].node.aboutSection.video"
        type="video/mp4"
      />
      <source data-src="video/mov_bbb.ogg" type="video/ogg" />
    </video>
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    <div class="fluid">
      <video
        playsinline="playsinline"
        preload="none"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
      >
        <source
          :src="$page.fullPage.edges[0].node.aboutSection.video"
          type="video/mp4"
        />
      </video>
      <video
        playsinline="playsinline"
        autoplay="autoplay"
        preload="none"
        muted="muted"
        loop="loop"
      >
        <source
          :src="$page.fullPage.edges[0].node.standSection.video"
          type="video/mp4"
        />
      </video>
    </div>
    <swiper
      class="swiper"
      style="height: 300px; width: 100%"
      :options="swiperOption"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="false"
    >
      <swiper-slide
        v-for="photo in $page.fullPage.edges[0].node.aboutSection.carousel"
        :key="photo.id"
      >
        <g-image :alt="photo.alt" :src="photo.image" />
      </swiper-slide>
    </swiper>
    <div class="flex flex-wrap">
      <div
        class="fluid w-64 h-64"
        v-for="photo in $page.fullPage.edges[0].node.aboutSection.carousel"
        :key="photo.id"
      >
        <g-image :alt="photo.alt" :src="photo.image" width="135" />
      </div>
      <div
        class="fluid w-64 h-64"
        v-for="photo in $page.fullPage.edges[0].node.cateringSection.carousel"
        :key="photo.id"
      >
        <g-image :alt="photo.alt" :src="photo.image" width="135" />
      </div>
      <div
        class="fluid w-64 h-64"
        v-for="photo in $page.fullPage.edges[0].node.registerSection.carousel"
        :key="photo.id"
      >
        <g-image :alt="photo.alt" :src="photo.image" width="135" />
      </div>
      <div
        class="fluid w-64 h-64"
        v-for="photo in $page.fullPage.edges[0].node.standSection.carousel"
        :key="photo.id"
      >
        <g-image :alt="photo.alt" :src="photo.image" width="135" />
      </div>
    </div> -->
  </Layout>
</template>

<page-query>
query {
  tags:  allTag{
  edges{
    node{
      id
      title
      equipments{
        title
        img
        price
      }
    }
  }
}
  fullPage: allFullPage {
    edges{
      node{
        aboutSection{
          video
          image_1{
            alt
            image
          }
          carousel{
            id
            image
            alt
          }
        }
        standSection{
          video
          carousel{
            id
            image
            alt
          }
        }
        cateringSection{
          carousel{
            id
            image
            alt
          }
        }
        registerSection{
          carousel{
            id
            image
            alt
          }
        }
      }
    }
  }
}
</page-query>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
export default {
  metaInfo: {
    title: "Hello, world!",
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      swiperOption: {
        speed: 900,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 30,
      },
    };
  },
  computed: {
    aboutSection() {
      return this.$page.fullPage.edges[0].node.aboutSection;
    },
    tags() {
      return this.$page.tags.edges;
    },
  },
};
</script>

<style>
section {
  margin-bottom: 50px;
}
.home-links a {
  margin-right: 1rem;
}
.swiper {
  height: 300px;
  width: 100%;
}
.swiper-slide img {
  height: inherit;
  border-radius: 0.7rem;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
