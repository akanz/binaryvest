import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({}));

const FAQ = () => {
  const classes = useStyles();
  return (
    <div className="w-9/10 mx-auto p-8">
      <h1 className="text-4xl text-center mb-8">Frequently Asked Questions</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* accordion 1 */}
        <div className="">
          <h3 className="text-turquoise text-xl py-2">General</h3>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="">What is Cryptocurrency?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  Cryptocurrency is decentralized digital money, based on
                  blockchain technology. You may be familiar with the most
                  popular versions, Bitcoin and Ethereum, but there are more
                  than 5,000 different cryptocurrencies in circulation,
                  according to CoinLore.
                </p>
                <p>
                  You can use crypto to buy regular goods and services, although
                  many people invest in cryptocurrencies as they would in other
                  assets, like stocks or precious metals. While cryptocurrency
                  is a novel and exciting asset class, purchasing it can be
                  risky as you must take on a fair amount of research to fully
                  understand how each system works.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="">
                How do I invest in Cryptocurrency?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-inside list-disc">
                  <li>Select the right crypto exchange</li>
                  <li>Open a Trading Account</li>
                  <li>Fund Your Account</li>
                  <li>Buying and Investing in Cryptocurrency</li>
                  <li>Store your Cryptocurrency</li>
                  <li>Choose a Strategy</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">
                How Does Cryptocurrency Work?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A cryptocurrency is a medium of exchange that is digital,
                encrypted and decentralized. Unlike the U.S. Dollar or the Euro,
                there is no central authority that manages and maintains the
                value of a cryptocurrency. Instead, these tasks are broadly
                distributed among a cryptocurrency’s users via the internet.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">What Is a Blockchain?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A blockchain is an open, distributed ledger that records
                transactions in code. In practice, it’s a little like a
                checkbook that’s distributed across countless computers around
                the world. Transactions are recorded in “blocks” that are then
                linked together on a “chain” of previous cryptocurrency
                transactions.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* accordion 2 */}
        <div>
          <h3 className="text-turquoise text-xl py-2">Invest</h3>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="">
                Difference between Investing & Trading
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The difference between Trading and Investing is that Trading
                means to resale the goods for a price whereas investing means to
                invest money in some schemes, projects, plans for earning profit
                in the future. Trading is for short term to medium term gain
                while investing is for medium-term to long term gain.
                <p>
                  Risk is high in trading while investing is comparatively low.
                  So before you rush into concluding anything, it’s important
                  that you familiarize yourself with the basics, part of which
                  includes understanding the difference between investing and
                  trading at the fundamental level.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">
                How much should I invest in bitcoin?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You should invest in Bitcoin somewhere around 15% to 40% of your
                investment capital. I consider 15% to be very safe and 40% to be
                pretty risky. Personally, I sit most of the time between 15% and
                50%.
                <p>
                  Ultimately, the decision is yours. And although it depends on
                  market factors, it also depends on personal factors such as
                  your risk tolerance and the amount of money you can afford to
                  lose.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">What is a blockchain wallet</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A blockchain wallet is a digital wallet that allows users to
                store and manage their Bitcoin, Ether, and other
                cryptocurrencies. Blockchain Wallet can also refer to the wallet
                service provided by Blockchain, a software company founded by
                Peter Smith and Nicolas Cary. A blockchain wallet allows
                transfers in cryptocurrencies and the ability to convert them
                back into a user's local currency.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* accordion 3 */}
        <div>
          <h3 className="text-turquoise text-xl py-2">Trade</h3>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="">How do I start trading?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-disc list-inside">
                  <li>Learn what moves bitcoin’s price</li>
                  <li>Pick a bitcoin trading style and strategy</li>
                  <li>Choose how you want to get exposure to bitcoin</li>
                  <li>Decide whether to go long or short</li>
                  <li>Set your stops and limits</li>
                  <li>Open and monitor your trade</li>
                  <li>Close your position to take a profit or cut a loss</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">
                What Cryptocurrency should I invest in
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <ul className="list-inside list-disc">
                  <li>Bitcoin</li>
                  <li>Litecoin</li>
                  <li>Ethereum</li>
                  <li>Dogecoin</li>
                  <li>VeChain</li>
                  <li>Binance Coin (BNB)</li>
                  <li>XRP or Ripple</li>
                  <li>Cardano (ADA)</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">
                Can I invest with money from my bank?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Buying Bitcoins with a bank wire is probably the best way to go
                in order to get the cheapest exchange rate possible. Depending
                on where you live in the world there are different exchanges
                that will be best suited for you.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* accordion 4 */}
        <div>
          <h3 className="text-turquoise text-xl py-2">Bitcoin</h3>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="">What is bitcoin trading?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Bitcoin trading is how you can speculate on movements in the
                cryptocurrency’s price. While this has traditionally involved
                buying bitcoin through an exchange, hoping that its price will
                rise in time, cryptocurrency traders are increasingly using
                derivatives to speculate on both rising and falling prices – in
                order to make the most of bitcoin’s volatility.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">How to day trade bitcoin</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Day trading bitcoin means that you’ll open and close a position
                within one single trading day – so you won’t have any bitcoin
                market exposure overnight. This means that you’ll avoid
                overnight funding charges on your position. This strategy could
                be for you if you’re looking to profit from bitcoin’s short-term
                price movements, and it can enable you to make the most of daily
                volatility in bitcoin’s price.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">How to trend trade bitcoin</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Trend trading means taking a position which matches the current
                trend. For example, if the market is in a bullish trend, you’d
                go long and if the trend was bearish, you’d go short. If this
                trend started to slow or reverse, you’d think about closing your
                position and opening a new one to match the emerging trend.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* accordion 5 */}
        <div>
          <h3 className="text-turquoise text-xl py-2">Alternative Coins</h3>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="">Should I buy Ethereum</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                After making it through some lows, Ethereum (ETH) has had an
                impressive rebound. Its price had sunk below $1,800 as recently
                as July 19. At the time of writing, it has increased by more
                than 120% and is closing in on the $4,000 mark.
                <p>
                  If you're interested in Ethereum or you're already investing
                  in it, you might be wondering whether now is a good time to
                  buy. It's always exciting to ride a hot investment, but
                  there's also the temptation to wait for a dip first.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">What is a shitcoin?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                A shitcoin is a cryptocurrency with little to no value or
                digital currency that has no immediate, discernable purpose.
                <p>
                  Shitcoins are characterized by short-term price increases
                  followed by nosedives caused by investors who want to
                  capitalize on short-term gains.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">How to spot a shitcoin</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The developers are mysterious. The people behind a project
                should be trustworthy, not a random group of strangers using
                fake names. You wouldn’t invest in stock from an anonymous
                group, would you? The same applies here. If the developers have
                identified themselves by video on Instagram or Youtube, for
                example, they’re considered doxxed and much more trustworthy.
                With their appearance known by the public, it’s much less likely
                to be a scam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        {/* accordion 6 */}
        <div className="">
          <h3 className="text-turquoise text-xl py-2">Mining and NFTs</h3>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="">What Is an NFT?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <p>
                  An NFT is a digital asset that represents real-world objects
                  like art, music, in-game items and videos. They are bought and
                  sold online, frequently with cryptocurrency, and they are
                  generally encoded with the same underlying software as many
                  cryptos.
                </p>
                <p>
                  NFTs are also generally one of a kind, or at least one of a
                  very limited run, and have unique identifying codes.
                  “Essentially, NFTs create digital scarcity,” says Arry Yu,
                  chair of the Washington Technology Industry Association
                  Cascadia Blockchain Council and managing director of Yellow
                  Umbrella Ventures.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="">How Does an NFT Work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                NFTs exist on a blockchain, which is a distributed public ledger
                that records transactions. You’re probably most familiar with
                blockchain as the underlying process that makes cryptocurrencies
                possible. An NFT is created, or “minted” from digital objects
                that represent both tangible and intangible items, including:
                <ul className="list-inside list-disc">
                  <li>Arts</li>
                  <li>GIFs</li>
                  <li>Collectibles</li>
                  <li>Music</li>
                  <li>Videos and sports highlights</li>
                  <li>Designer sneakers</li>
                </ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">
                How Is an NFT Different from Cryptocurrency?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                NFT stands for non-fungible token. It’s generally built using
                the same kind of programming as cryptocurrency, like Bitcoin or
                Ethereum, but that’s where the similarity ends. Physical money
                and cryptocurrencies are “fungible,” meaning they can be traded
                or exchanged for one another. They’re also equal in value—one
                dollar is always worth another dollar; one Bitcoin is always
                equal to another Bitcoin. Crypto’s fungibility makes it a
                trusted means of conducting transactions on the blockchain.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className="">
                How Can You Mine Cryptocurrency?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Mining is how new units of cryptocurrency are released into the
                world, generally in exchange for validating transactions. While
                it’s theoretically possible for the average person to mine
                cryptocurrency, it’s increasingly difficult in proof of work
                systems, like Bitcoin.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
