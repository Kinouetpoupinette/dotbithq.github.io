import{e as t}from"./app.e9f43771.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";const r={},a=t('<h1 id="pricing-fee" tabindex="-1"><a class="header-anchor" href="#pricing-fee" aria-hidden="true">#</a> Pricing/Fee</h1><h2 id="pricing" tabindex="-1"><a class="header-anchor" href="#pricing" aria-hidden="true">#</a> Pricing</h2><p>Fee paid at registration = Annual fee * Length of registration period + Storage deposit.</p><h3 id="annual-fee" tabindex="-1"><a class="header-anchor" href="#annual-fee" aria-hidden="true">#</a> Annual fee</h3><table><thead><tr><th style="text-align:left;">Account Character Length</th><th style="text-align:left;">Price</th><th style="text-align:left;">Price after filling in the invitee ( x0.95 )</th></tr></thead><tbody><tr><td style="text-align:left;">5 digits and above</td><td style="text-align:left;">$4.99/year</td><td style="text-align:left;">$4.75/year</td></tr><tr><td style="text-align:left;">4-bit</td><td style="text-align:left;">$160/year</td><td style="text-align:left;">$152/year</td></tr><tr><td style="text-align:left;">3-bit</td><td style="text-align:left;">$660/year</td><td style="text-align:left;">$627/year</td></tr><tr><td style="text-align:left;">2 bit</td><td style="text-align:left;">$1,024/year</td><td style="text-align:left;">$972.8/year</td></tr><tr><td style="text-align:left;">1 bit</td><td style="text-align:left;">-</td><td style="text-align:left;">-</td></tr></tbody></table><h3 id="action-fee" tabindex="-1"><a class="header-anchor" href="#action-fee" aria-hidden="true">#</a> Action Fee</h3><table><thead><tr><th>Action</th><th>Action Fee</th><th>Miner Fee</th></tr></thead><tbody><tr><td>Edit Records</td><td>Free</td><td>Free</td></tr><tr><td>Transfer Owner</td><td>Free</td><td>Free</td></tr><tr><td>Transfer Manager</td><td>Free</td><td>Free</td></tr><tr><td>Query Records</td><td>Free</td><td>Free</td></tr></tbody></table><h3 id="storage-deposit" tabindex="-1"><a class="header-anchor" href="#storage-deposit" aria-hidden="true">#</a> Storage Deposit</h3><p>The storage fee corresponds to the amount of on-chain storage space required to store account information on the Nervos CKB chain, and .bit is carefully structured so that a fixed storage fee is pledged regardless of the number of parsed records stored in the .bit account. The pledged storage fee is 206 CKB per account. <strong>If an account expires and is not renewed, the storage deposit will be returned to the account&#39;s Owner address at the time of expiration</strong>.</p><p>Since .bit is a decentralized application running on Nervos CKB, it only recognizes CKB as a payment method for fees. Therefore, the .bit team maintains a CKB/USD price prediction machine service that allows the contract to know how much CKB should be charged when a user signs up, and allows users to pay in any currency due to the presence of a .bit registrar.</p>',10);function d(i,n){return a}var l=e(r,[["render",d]]);export{l as default};