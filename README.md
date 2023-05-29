# generator-scrapy
> Yeoman generator for scrapy app.

## installation
```shell
git clone git@github.com:afeiship/generator-scrapy.git
cd generator-scrapy
npm i && npm link
```

## usage
```shell
# Init project
yo @jswork/scrapy

# Add pipelines(processor + download)
yo @jswork/scrapy:pipelines

# create model
yo @jswork/scrapy:model nx_page
yo @jswork/scrapy:model nx_url

# create spide
yo @jswork/scrapy:spider nx_page

# create spider + model
yo @jswork/scrapy:spmodel nx_page
```

## todo
- [ ] schedule backup database structure

## License
MIT © [afeiship](https://js.work)
