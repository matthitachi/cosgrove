<?php

namespace Database\Seeders;

use App\Models\PressArticle;
use Illuminate\Database\Seeder;

class PressArticleSeeder extends Seeder
{
    public function run(): void
    {
        $articles = [
            ['headline' => 'Cosgrove boosts housing market with Abuja estate project',                                                            'publication' => 'The Guardian',      'published_date' => '2023-07-12', 'external_url' => 'https://guardian.ng/news/cosgrove-boosts-housing-market-with-abuja-estate-project/'],
            ['headline' => 'Relief as firm donates accommodation to Abuja displaced orphans',                                                      'publication' => 'The Nation',        'published_date' => '2023-07-12', 'external_url' => 'https://thenationonlineng.net/relief-as-firm-donates-accommodation-to-abuja-displaced-orphans/'],
            ['headline' => 'Cosgrove gets NITP, COREN, commendations for CSR',                                                                     'publication' => 'This Day',          'published_date' => '2023-07-12', 'external_url' => 'https://thenationonlineng.net/relief-as-firm-donates-accommodation-to-abuja-displaced-orphans/'],
            ['headline' => 'AI in home security',                                                                                                  'publication' => 'The Business Year', 'published_date' => '2023-07-12', 'external_url' => null],
            ['headline' => 'In handling real estate competitions we see ourselves as co stakeholders',                                             'publication' => 'Daily Times',       'published_date' => '2019-11-06', 'external_url' => 'https://dailytimes.ng/2019/11/06/in-handling-real-estate-competitions-we-see-ourselves-as-co-stakeholders/'],
            ['headline' => 'NIA honours Cosgrove founder, Umar Abdullahi',                                                                         'publication' => 'Punch',             'published_date' => '2019-09-17', 'external_url' => 'https://punchng.com/nia-honours-cosgrove-founder-umar-abdullahi/'],
            ['headline' => 'Cosgrove Plants 1000 Trees To Commemorate 2019 Customer Week',                                                         'publication' => 'Truth Ng',          'published_date' => '2019-10-16', 'external_url' => 'https://www.truthng.com/photo-news-cosgrove-plants-1000-tress-commemorate-2019-customer-week/'],
            ['headline' => 'Why Cosgrove uses British Standard Steel, Ready-Mix Concrete, despite cost',                                           'publication' => 'Truth Ng',          'published_date' => '2019-09-15', 'external_url' => 'https://www.truthng.com/cosgrove-uses-british-standard-steel-ready-mix-concrete-despite-cost-ceo/'],
            ['headline' => 'Cosgrove gets NITP, COREN commendation for constructing 1.5km access road in Maitama',                                 'publication' => 'Truth Ng',          'published_date' => '2019-03-24', 'external_url' => 'https://www.truthng.com/cosgrove-gets-nitp-coren-commendation-constructing-1-5km-access-road-maitama/'],
            ['headline' => 'Cosgrove Gets Super Eagles Star As Patron',                                                                             'publication' => 'Daily Trust',       'published_date' => '2019-07-22', 'external_url' => 'https://dailytrust.com/cosgrove-gets-super-eagles-star-as-patron/'],
            ['headline' => 'Cosgrove, 11 others, bag Smart City Award as Osinbajo tasks industry leaders on sustained economic growth',            'publication' => 'Truth Ng',          'published_date' => '2019-05-23', 'external_url' => 'https://www.truthng.com/cosgrove-11-others-bag-smart-city-award-osinbajo-tasks-industry-leaders-sustained-economic-growth/'],
            ['headline' => 'Focus on Nigeria: Unravelling The Evolution And Progression Of Nigeria\'s Economy On The Eve Of Its Diamond Jubilee', 'publication' => 'Forbes Africa',     'published_date' => '2020-10-01', 'external_url' => 'https://www.forbesafrica.com/brand-voice/2020/09/30/focus-on-nigeria-unravelling-the-evolution-and-progression-of-nigerias-economy-on-the-eve-of-its-diamond-jubilee/'],
            ['headline' => 'CBN Governor Emiefele, Cosgrove CEO Umar Abdullahi, others make Forbes Africa\'s list',                               'publication' => 'Daily Nigerian',    'published_date' => '2022-04-08', 'external_url' => 'https://dailynigerian.com/cbn-governor-emiefele-cosgrove/'],
            ['headline' => 'NIA names Cosgrove CEO \'Real Estate Developer of 2019\'',                                                            'publication' => 'Premium Times',     'published_date' => '2019-09-15', 'external_url' => 'https://www.premiumtimesng.com/promoted/352434-promoted-nia-names-cosgrove-ceo-real-estate-developer-of-2019.html'],
            ['headline' => 'Buhari confers Cosgrove CEO, Umar Abdullahi, with OFR National Honour',                                               'publication' => 'Africa Housing News','published_date' => '2023-05-29', 'external_url' => 'https://www.africahousingnews.com/buhari-confers-cosgrove-ceo-umar-abdullahi-with-ofr-national-honour/'],
            ['headline' => 'Cosgrove\'s Wuye Smart Estate Gives Abuja Panache In Property',                                                       'publication' => 'Daily Trust',       'published_date' => '2021-12-20', 'external_url' => 'https://dailytrust.com/cosgroves-wuye-smart-estate-gives-abuja-panache-in-property/'],
            ['headline' => 'Cosgrove Set To Boost FCT Real Estate Market',                                                                         'publication' => 'Daily Trust',       'published_date' => '2018-08-20', 'external_url' => 'https://dailytrust.com/cosgrove-set-to-boost-fct-real-estate-market-266585/'],
        ];

        foreach ($articles as $i => $article) {
            PressArticle::updateOrCreate(
                ['headline' => $article['headline']],
                array_merge($article, ['is_active' => true, 'sort_order' => $i + 1])
            );
        }
    }
}
