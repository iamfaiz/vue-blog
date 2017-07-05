let articles = [
	{ id: 1, title: 'The first post', slug: 'first-post', exerpt: 'The first post exerpt', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore temporibus officia voluptatum reiciendis, illo ex iste molestias, doloremque! Laboriosam nihil sit, tempora nam porro placeat reprehenderit non exercitationem ipsa magnam!'  },
	{ id: 2, title: 'The second post', slug: 'second-post', exerpt: 'The second post exerpt', content: 'Consectetur adipisicing elit. Inventore temporibus officia voluptatum reiciendis, illo ex iste molestias, doloremque! Laboriosam nihil sit, tempora nam porro placeat reprehenderit non exercitationem ipsa magnam!'  },
];

let Home = {
	template: `
<div>
	<h1 class="page-header">Home</h1>
	<div v-for="article in articles">
		<h3><router-link :to="/articles/ + article.slug">{{ article.title }}</router-link></h3>
		<p>{{ article.exerpt }}</p>
	</div>
</div>
	`,

	data() {
		return {
			articles: []
		}
	},

	mounted() {
		this.articles = articles;
	}
};

let Contact = {
	template: `
		<div>
			<h1 class="page-header">Contact</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat eos suscipit molestias nam numquam ratione aliquid provident id earum ipsam omnis, temporibus vero porro molestiae, facilis tempora itaque libero mollitia voluptatum, architecto ad! Sit alias aut provident amet pariatur accusantium voluptates! Tempora cumque reprehenderit dicta molestiae nulla quam reiciendis cum nam aliquam corporis, dolor modi, sunt ipsam. Obcaecati veritatis illum rem vel tempore, explicabo voluptates id incidunt quod laborum tempora inventore aut alias culpa laboriosam non, ducimus rerum repellendus voluptatem beatae soluta consequuntur, repellat aspernatur. Atque incidunt velit eius libero, molestiae eos delectus error distinctio minima laboriosam quasi earum expedita fugit quos? Recusandae molestiae ipsum quasi? Explicabo dolorum neque quam dolorem, non assumenda iusto, atque tenetur odio sequi quis incidunt.</p>
		</div>
	`
};

let Article = {
	template: `
		<div>
			<h2>{{ article.title }}</h2>
			<p>{{ article.content }}</p>
		</div>
	`,

	data() {
		return {
			article: {}
		};
	},

	mounted() {
		this.article = this.findBySlug(this.$route.params.slug);
	},

	methods: {
		findBySlug(slug) {
			for (let i = 0; i < articles.length; i++)
			{
				if (slug === articles[i].slug) return articles[i];
			}

			return null;
		}
	}
};

let routes = [
	{ path: '/', component: Home },
	{ path: '/contact', component: Contact },
	{ path: '/articles/:slug', component: Article }
];

let router = new VueRouter({ routes });

let app = new Vue({ router }).$mount('#app');