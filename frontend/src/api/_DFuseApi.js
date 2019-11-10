import {createDfuseClient} from "@dfuse/client";

const dFuseClient = createDfuseClient({
  apiKey: "web_47d20cf6a437bc135a12b9b613db5bb4",
  network: "mainnet.eth.dfuse.io"
});

export const query = async operation => {
  let message = await dFuseClient.graphql(operation);
  console.log(message);
  return message;
};

const checkWalletForKeyQuery = (userAddr, contractAddr) => `query{
    searchTransactions(indexName: LOGS, query: "topic.2:${userAddr} topic.0:0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef address:${contractAddr}",lowBlockNum: 8647393, highBlockNum: -1, limit:1){
      edges {
        undo
        node {
          from
          to
          value
          allLogs {
            topics
            address
            data
          }
        }
      }
    }
  }`;

export const checkWalletForKey = async (userAddr, contractAddr) => {
  let operation = checkWalletForKeyQuery(userAddr, contractAddr);

  return await query(operation);
};

export default dFuseClient;
