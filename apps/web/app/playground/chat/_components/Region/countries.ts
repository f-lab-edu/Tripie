const html = `
            <tr>
                <th></th>
                <th>Names</th>
                <th>Country</th>
                <th>
                    Country<br>Code
                </th>
                <th>Area in km &sup2;</th>
                <th>
                    Names per<br>km &sup2;
                </th>
                <th>Population</th>
                <th>
                    Names per<br>1000 Inhabitants
                </th>
            </tr>
            <tr>
                <td>1</td>
                <td class="rightalign">2,240,288</td>
                <td>
                    <a href="/statistics/united-states.html">United States</a>
                </td>
                <td>US</td>
                <td class="rightalign">9,629,091.0</td>
                <td class="rightalign">0.233</td>
                <td class="rightalign">327,167,434</td>
                <td class="rightalign">6.848</td>
            </tr>
            <tr class="odd">
                <td>2</td>
                <td class="rightalign">874,707</td>
                <td>
                    <a href="/statistics/china.html">China</a>
                </td>
                <td>CN</td>
                <td class="rightalign">9,596,960.0</td>
                <td class="rightalign">0.091</td>
                <td class="rightalign">1,411,778,724</td>
                <td class="rightalign">0.620</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="rightalign">649,294</td>
                <td>
                    <a href="/statistics/india.html">India</a>
                </td>
                <td>IN</td>
                <td class="rightalign">3,287,590.0</td>
                <td class="rightalign">0.197</td>
                <td class="rightalign">1,352,617,328</td>
                <td class="rightalign">0.480</td>
            </tr>
            <tr class="odd">
                <td>4</td>
                <td class="rightalign">607,431</td>
                <td>
                    <a href="/statistics/norway.html">Norway</a>
                </td>
                <td>NO</td>
                <td class="rightalign">324,220.0</td>
                <td class="rightalign">1.874</td>
                <td class="rightalign">5,314,336</td>
                <td class="rightalign">114.300</td>
            </tr>
            <tr>
                <td>5</td>
                <td class="rightalign">455,803</td>
                <td>
                    <a href="/statistics/mexico.html">Mexico</a>
                </td>
                <td>MX</td>
                <td class="rightalign">1,972,550.0</td>
                <td class="rightalign">0.231</td>
                <td class="rightalign">126,190,788</td>
                <td class="rightalign">3.612</td>
            </tr>
            <tr class="odd">
                <td>6</td>
                <td class="rightalign">447,489</td>
                <td>
                    <a href="/statistics/indonesia.html">Indonesia</a>
                </td>
                <td>ID</td>
                <td class="rightalign">1,919,440.0</td>
                <td class="rightalign">0.233</td>
                <td class="rightalign">267,663,435</td>
                <td class="rightalign">1.672</td>
            </tr>
            <tr>
                <td>7</td>
                <td class="rightalign">367,180</td>
                <td>
                    <a href="/statistics/russia.html">Russia</a>
                </td>
                <td>RU</td>
                <td class="rightalign">17,100,000.0</td>
                <td class="rightalign">0.021</td>
                <td class="rightalign">144,478,050</td>
                <td class="rightalign">2.541</td>
            </tr>
            <tr class="odd">
                <td>8</td>
                <td class="rightalign">314,331</td>
                <td>
                    <a href="/statistics/canada.html">Canada</a>
                </td>
                <td>CA</td>
                <td class="rightalign">9,984,670.0</td>
                <td class="rightalign">0.031</td>
                <td class="rightalign">37,058,856</td>
                <td class="rightalign">8.482</td>
            </tr>
            <tr>
                <td>9</td>
                <td class="rightalign">255,169</td>
                <td>
                    <a href="/statistics/thailand.html">Thailand</a>
                </td>
                <td>TH</td>
                <td class="rightalign">514,000.0</td>
                <td class="rightalign">0.496</td>
                <td class="rightalign">69,428,524</td>
                <td class="rightalign">3.675</td>
            </tr>
            <tr class="odd">
                <td>10</td>
                <td class="rightalign">243,646</td>
                <td>
                    <a href="/statistics/iran.html">Iran</a>
                </td>
                <td>IR</td>
                <td class="rightalign">1,648,000.0</td>
                <td class="rightalign">0.148</td>
                <td class="rightalign">81,800,269</td>
                <td class="rightalign">2.979</td>
            </tr>
            <tr>
                <td>11</td>
                <td class="rightalign">226,019</td>
                <td>
                    <a href="/statistics/pakistan.html">Pakistan</a>
                </td>
                <td>PK</td>
                <td class="rightalign">803,940.0</td>
                <td class="rightalign">0.281</td>
                <td class="rightalign">212,215,030</td>
                <td class="rightalign">1.065</td>
            </tr>
            <tr class="odd">
                <td>12</td>
                <td class="rightalign">214,024</td>
                <td>
                    <a href="/statistics/australia.html">Australia</a>
                </td>
                <td>AU</td>
                <td class="rightalign">7,686,850.0</td>
                <td class="rightalign">0.028</td>
                <td class="rightalign">24,992,369</td>
                <td class="rightalign">8.564</td>
            </tr>
            <tr>
                <td>13</td>
                <td class="rightalign">199,252</td>
                <td>
                    <a href="/statistics/germany.html">Germany</a>
                </td>
                <td>DE</td>
                <td class="rightalign">357,021.0</td>
                <td class="rightalign">0.558</td>
                <td class="rightalign">82,927,922</td>
                <td class="rightalign">2.403</td>
            </tr>
            <tr class="odd">
                <td>14</td>
                <td class="rightalign">169,721</td>
                <td>
                    <a href="/statistics/france.html">France</a>
                </td>
                <td>FR</td>
                <td class="rightalign">547,030.0</td>
                <td class="rightalign">0.310</td>
                <td class="rightalign">66,987,244</td>
                <td class="rightalign">2.534</td>
            </tr>
            <tr>
                <td>15</td>
                <td class="rightalign">153,184</td>
                <td>
                    <a href="/statistics/morocco.html">Morocco</a>
                </td>
                <td>MA</td>
                <td class="rightalign">446,550.0</td>
                <td class="rightalign">0.343</td>
                <td class="rightalign">36,029,138</td>
                <td class="rightalign">4.252</td>
            </tr>
            <tr class="odd">
                <td>16</td>
                <td class="rightalign">140,886</td>
                <td>
                    <a href="/statistics/nepal.html">Nepal</a>
                </td>
                <td>NP</td>
                <td class="rightalign">140,800.0</td>
                <td class="rightalign">1.001</td>
                <td class="rightalign">28,087,871</td>
                <td class="rightalign">5.016</td>
            </tr>
            <tr>
                <td>17</td>
                <td class="rightalign">132,487</td>
                <td>
                    <a href="/statistics/south-korea.html">South Korea</a>
                </td>
                <td>KR</td>
                <td class="rightalign">98,480.0</td>
                <td class="rightalign">1.345</td>
                <td class="rightalign">51,635,256</td>
                <td class="rightalign">2.566</td>
            </tr>
            <tr class="odd">
                <td>18</td>
                <td class="rightalign">130,898</td>
                <td>
                    <a href="/statistics/brazil.html">Brazil</a>
                </td>
                <td>BR</td>
                <td class="rightalign">8,511,965.0</td>
                <td class="rightalign">0.015</td>
                <td class="rightalign">209,469,333</td>
                <td class="rightalign">0.625</td>
            </tr>
            <tr>
                <td>19</td>
                <td class="rightalign">119,972</td>
                <td>
                    <a href="/statistics/italy.html">Italy</a>
                </td>
                <td>IT</td>
                <td class="rightalign">301,230.0</td>
                <td class="rightalign">0.398</td>
                <td class="rightalign">60,431,283</td>
                <td class="rightalign">1.985</td>
            </tr>
            <tr class="odd">
                <td>20</td>
                <td class="rightalign">105,141</td>
                <td>
                    <a href="/statistics/peru.html">Peru</a>
                </td>
                <td>PE</td>
                <td class="rightalign">1,285,220.0</td>
                <td class="rightalign">0.082</td>
                <td class="rightalign">31,989,256</td>
                <td class="rightalign">3.287</td>
            </tr>
            <tr>
                <td>21</td>
                <td class="rightalign">102,775</td>
                <td>
                    <a href="/statistics/south-africa.html">South Africa</a>
                </td>
                <td>ZA</td>
                <td class="rightalign">1,219,912.0</td>
                <td class="rightalign">0.084</td>
                <td class="rightalign">57,779,622</td>
                <td class="rightalign">1.779</td>
            </tr>
            <tr class="odd">
                <td>22</td>
                <td class="rightalign">100,874</td>
                <td>
                    <a href="/statistics/japan.html">Japan</a>
                </td>
                <td>JP</td>
                <td class="rightalign">377,835.0</td>
                <td class="rightalign">0.267</td>
                <td class="rightalign">126,529,100</td>
                <td class="rightalign">0.797</td>
            </tr>
            <tr>
                <td>23</td>
                <td class="rightalign">97,684</td>
                <td>
                    <a href="/statistics/yemen.html">Yemen</a>
                </td>
                <td>YE</td>
                <td class="rightalign">527,970.0</td>
                <td class="rightalign">0.185</td>
                <td class="rightalign">28,498,687</td>
                <td class="rightalign">3.428</td>
            </tr>
            <tr class="odd">
                <td>24</td>
                <td class="rightalign">96,509</td>
                <td>
                    <a href="/statistics/sweden.html">Sweden</a>
                </td>
                <td>SE</td>
                <td class="rightalign">449,964.0</td>
                <td class="rightalign">0.214</td>
                <td class="rightalign">10,183,175</td>
                <td class="rightalign">9.477</td>
            </tr>
            <tr>
                <td>25</td>
                <td class="rightalign">93,884</td>
                <td>
                    <a href="/statistics/philippines.html">Philippines</a>
                </td>
                <td>PH</td>
                <td class="rightalign">300,000.0</td>
                <td class="rightalign">0.313</td>
                <td class="rightalign">106,651,922</td>
                <td class="rightalign">0.880</td>
            </tr>
            <tr class="odd">
                <td>26</td>
                <td class="rightalign">90,332</td>
                <td>
                    <a href="/statistics/finland.html">Finland</a>
                </td>
                <td>FI</td>
                <td class="rightalign">337,030.0</td>
                <td class="rightalign">0.268</td>
                <td class="rightalign">5,518,050</td>
                <td class="rightalign">16.370</td>
            </tr>
            <tr>
                <td>27</td>
                <td class="rightalign">87,745</td>
                <td>
                    <a href="/statistics/turkey.html">Turkey</a>
                </td>
                <td>TR</td>
                <td class="rightalign">780,580.0</td>
                <td class="rightalign">0.112</td>
                <td class="rightalign">82,319,724</td>
                <td class="rightalign">1.066</td>
            </tr>
            <tr class="odd">
                <td>28</td>
                <td class="rightalign">85,681</td>
                <td>
                    <a href="/statistics/spain.html">Spain</a>
                </td>
                <td>ES</td>
                <td class="rightalign">504,782.0</td>
                <td class="rightalign">0.170</td>
                <td class="rightalign">46,723,749</td>
                <td class="rightalign">1.834</td>
            </tr>
            <tr>
                <td>29</td>
                <td class="rightalign">82,366</td>
                <td>
                    <a href="/statistics/switzerland.html">Switzerland</a>
                </td>
                <td>CH</td>
                <td class="rightalign">41,290.0</td>
                <td class="rightalign">1.995</td>
                <td class="rightalign">8,516,543</td>
                <td class="rightalign">9.671</td>
            </tr>
            <tr class="odd">
                <td>30</td>
                <td class="rightalign">80,242</td>
                <td>
                    <a href="/statistics/colombia.html">Colombia</a>
                </td>
                <td>CO</td>
                <td class="rightalign">1,138,910.0</td>
                <td class="rightalign">0.070</td>
                <td class="rightalign">49,648,685</td>
                <td class="rightalign">1.616</td>
            </tr>
            <tr>
                <td>31</td>
                <td class="rightalign">75,746</td>
                <td>
                    <a href="/statistics/afghanistan.html">Afghanistan</a>
                </td>
                <td>AF</td>
                <td class="rightalign">647,500.0</td>
                <td class="rightalign">0.117</td>
                <td class="rightalign">37,172,386</td>
                <td class="rightalign">2.038</td>
            </tr>
            <tr class="odd">
                <td>32</td>
                <td class="rightalign">74,573</td>
                <td>
                    <a href="/statistics/nigeria.html">Nigeria</a>
                </td>
                <td>NG</td>
                <td class="rightalign">923,768.0</td>
                <td class="rightalign">0.081</td>
                <td class="rightalign">195,874,740</td>
                <td class="rightalign">0.381</td>
            </tr>
            <tr>
                <td>33</td>
                <td class="rightalign">73,768</td>
                <td>
                    <a href="/statistics/angola.html">Angola</a>
                </td>
                <td>AO</td>
                <td class="rightalign">1,246,700.0</td>
                <td class="rightalign">0.059</td>
                <td class="rightalign">30,809,762</td>
                <td class="rightalign">2.394</td>
            </tr>
            <tr class="odd">
                <td>34</td>
                <td class="rightalign">69,869</td>
                <td>
                    <a href="/statistics/united-kingdom.html">United Kingdom</a>
                </td>
                <td>GB</td>
                <td class="rightalign">244,820.0</td>
                <td class="rightalign">0.285</td>
                <td class="rightalign">66,488,991</td>
                <td class="rightalign">1.051</td>
            </tr>
            <tr>
                <td>35</td>
                <td class="rightalign">69,407</td>
                <td>
                    <a href="/statistics/malaysia.html">Malaysia</a>
                </td>
                <td>MY</td>
                <td class="rightalign">329,750.0</td>
                <td class="rightalign">0.210</td>
                <td class="rightalign">31,528,585</td>
                <td class="rightalign">2.201</td>
            </tr>
            <tr class="odd">
                <td>36</td>
                <td class="rightalign">68,927</td>
                <td>
                    <a href="/statistics/venezuela.html">Venezuela</a>
                </td>
                <td>VE</td>
                <td class="rightalign">912,050.0</td>
                <td class="rightalign">0.076</td>
                <td class="rightalign">28,870,195</td>
                <td class="rightalign">2.387</td>
            </tr>
            <tr>
                <td>37</td>
                <td class="rightalign">68,505</td>
                <td>
                    <a href="/statistics/kazakhstan.html">Kazakhstan</a>
                </td>
                <td>KZ</td>
                <td class="rightalign">2,717,300.0</td>
                <td class="rightalign">0.025</td>
                <td class="rightalign">18,276,499</td>
                <td class="rightalign">3.748</td>
            </tr>
            <tr class="odd">
                <td>38</td>
                <td class="rightalign">68,035</td>
                <td>
                    <a href="/statistics/new-zealand.html">New Zealand</a>
                </td>
                <td>NZ</td>
                <td class="rightalign">268,680.0</td>
                <td class="rightalign">0.253</td>
                <td class="rightalign">4,885,500</td>
                <td class="rightalign">13.926</td>
            </tr>
            <tr>
                <td>39</td>
                <td class="rightalign">66,431</td>
                <td>
                    <a href="/statistics/dr-congo.html">DR Congo</a>
                </td>
                <td>CD</td>
                <td class="rightalign">2,345,410.0</td>
                <td class="rightalign">0.028</td>
                <td class="rightalign">84,068,091</td>
                <td class="rightalign">0.790</td>
            </tr>
            <tr class="odd">
                <td>40</td>
                <td class="rightalign">65,299</td>
                <td>
                    <a href="/statistics/vietnam.html">Vietnam</a>
                </td>
                <td>VN</td>
                <td class="rightalign">329,560.0</td>
                <td class="rightalign">0.198</td>
                <td class="rightalign">95,540,395</td>
                <td class="rightalign">0.683</td>
            </tr>
            <tr>
                <td>41</td>
                <td class="rightalign">59,135</td>
                <td>
                    <a href="/statistics/bangladesh.html">Bangladesh</a>
                </td>
                <td>BD</td>
                <td class="rightalign">144,000.0</td>
                <td class="rightalign">0.411</td>
                <td class="rightalign">161,356,039</td>
                <td class="rightalign">0.366</td>
            </tr>
            <tr class="odd">
                <td>42</td>
                <td class="rightalign">58,837</td>
                <td>
                    <a href="/statistics/myanmar.html">Myanmar</a>
                </td>
                <td>MM</td>
                <td class="rightalign">678,500.0</td>
                <td class="rightalign">0.087</td>
                <td class="rightalign">53,708,395</td>
                <td class="rightalign">1.095</td>
            </tr>
            <tr>
                <td>43</td>
                <td class="rightalign">58,039</td>
                <td>
                    <a href="/statistics/poland.html">Poland</a>
                </td>
                <td>PL</td>
                <td class="rightalign">312,685.0</td>
                <td class="rightalign">0.186</td>
                <td class="rightalign">37,978,548</td>
                <td class="rightalign">1.528</td>
            </tr>
            <tr class="odd">
                <td>44</td>
                <td class="rightalign">56,749</td>
                <td>
                    <a href="/statistics/sri-lanka.html">Sri Lanka</a>
                </td>
                <td>LK</td>
                <td class="rightalign">65,610.0</td>
                <td class="rightalign">0.865</td>
                <td class="rightalign">21,670,000</td>
                <td class="rightalign">2.619</td>
            </tr>
            <tr>
                <td>45</td>
                <td class="rightalign">55,810</td>
                <td>
                    <a href="/statistics/iraq.html">Iraq</a>
                </td>
                <td>IQ</td>
                <td class="rightalign">437,072.0</td>
                <td class="rightalign">0.128</td>
                <td class="rightalign">38,433,600</td>
                <td class="rightalign">1.452</td>
            </tr>
            <tr class="odd">
                <td>46</td>
                <td class="rightalign">54,627</td>
                <td>
                    <a href="/statistics/algeria.html">Algeria</a>
                </td>
                <td>DZ</td>
                <td class="rightalign">2,381,740.0</td>
                <td class="rightalign">0.023</td>
                <td class="rightalign">42,228,429</td>
                <td class="rightalign">1.294</td>
            </tr>
            <tr>
                <td>47</td>
                <td class="rightalign">52,588</td>
                <td>
                    <a href="/statistics/austria.html">Austria</a>
                </td>
                <td>AT</td>
                <td class="rightalign">83,858.0</td>
                <td class="rightalign">0.627</td>
                <td class="rightalign">8,847,037</td>
                <td class="rightalign">5.944</td>
            </tr>
            <tr class="odd">
                <td>48</td>
                <td class="rightalign">51,878</td>
                <td>
                    <a href="/statistics/bosnia-and-herzegovina.html">Bosnia and Herzegovina</a>
                </td>
                <td>BA</td>
                <td class="rightalign">51,129.0</td>
                <td class="rightalign">1.015</td>
                <td class="rightalign">3,323,929</td>
                <td class="rightalign">15.607</td>
            </tr>
            <tr>
                <td>49</td>
                <td class="rightalign">50,899</td>
                <td>
                    <a href="/statistics/madagascar.html">Madagascar</a>
                </td>
                <td>MG</td>
                <td class="rightalign">587,040.0</td>
                <td class="rightalign">0.087</td>
                <td class="rightalign">26,262,368</td>
                <td class="rightalign">1.938</td>
            </tr>
            <tr class="odd">
                <td>50</td>
                <td class="rightalign">49,745</td>
                <td>
                    <a href="/statistics/argentina.html">Argentina</a>
                </td>
                <td>AR</td>
                <td class="rightalign">2,766,890.0</td>
                <td class="rightalign">0.018</td>
                <td class="rightalign">44,494,502</td>
                <td class="rightalign">1.118</td>
            </tr>
            <tr>
                <td>51</td>
                <td class="rightalign">49,064</td>
                <td>
                    <a href="/statistics/mozambique.html">Mozambique</a>
                </td>
                <td>MZ</td>
                <td class="rightalign">801,590.0</td>
                <td class="rightalign">0.061</td>
                <td class="rightalign">29,495,962</td>
                <td class="rightalign">1.663</td>
            </tr>
            <tr class="odd">
                <td>52</td>
                <td class="rightalign">46,152</td>
                <td>
                    <a href="/statistics/chile.html">Chile</a>
                </td>
                <td>CL</td>
                <td class="rightalign">756,950.0</td>
                <td class="rightalign">0.061</td>
                <td class="rightalign">18,729,160</td>
                <td class="rightalign">2.464</td>
            </tr>
            <tr>
                <td>53</td>
                <td class="rightalign">45,566</td>
                <td>
                    <a href="/statistics/taiwan.html">Taiwan</a>
                </td>
                <td>TW</td>
                <td class="rightalign">35,980.0</td>
                <td class="rightalign">1.266</td>
                <td class="rightalign">23,451,837</td>
                <td class="rightalign">1.943</td>
            </tr>
            <tr class="odd">
                <td>54</td>
                <td class="rightalign">44,469</td>
                <td>
                    <a href="/statistics/cuba.html">Cuba</a>
                </td>
                <td>CU</td>
                <td class="rightalign">110,860.0</td>
                <td class="rightalign">0.401</td>
                <td class="rightalign">11,338,138</td>
                <td class="rightalign">3.922</td>
            </tr>
            <tr>
                <td>55</td>
                <td class="rightalign">42,852</td>
                <td>
                    <a href="/statistics/czechia.html">Czechia</a>
                </td>
                <td>CZ</td>
                <td class="rightalign">78,866.0</td>
                <td class="rightalign">0.543</td>
                <td class="rightalign">10,625,695</td>
                <td class="rightalign">4.033</td>
            </tr>
            <tr class="odd">
                <td>56</td>
                <td class="rightalign">42,851</td>
                <td>
                    <a href="/statistics/north-korea.html">North Korea</a>
                </td>
                <td>KP</td>
                <td class="rightalign">120,540.0</td>
                <td class="rightalign">0.355</td>
                <td class="rightalign">25,549,819</td>
                <td class="rightalign">1.677</td>
            </tr>
            <tr>
                <td>57</td>
                <td class="rightalign">42,687</td>
                <td>
                    <a href="/statistics/ukraine.html">Ukraine</a>
                </td>
                <td>UA</td>
                <td class="rightalign">603,700.0</td>
                <td class="rightalign">0.071</td>
                <td class="rightalign">44,622,516</td>
                <td class="rightalign">0.957</td>
            </tr>
            <tr class="odd">
                <td>58</td>
                <td class="rightalign">39,297</td>
                <td>
                    <a href="/statistics/syria.html">Syria</a>
                </td>
                <td>SY</td>
                <td class="rightalign">185,180.0</td>
                <td class="rightalign">0.212</td>
                <td class="rightalign">16,906,283</td>
                <td class="rightalign">2.324</td>
            </tr>
            <tr>
                <td>59</td>
                <td class="rightalign">37,377</td>
                <td>
                    <a href="/statistics/portugal.html">Portugal</a>
                </td>
                <td>PT</td>
                <td class="rightalign">92,391.0</td>
                <td class="rightalign">0.405</td>
                <td class="rightalign">10,281,762</td>
                <td class="rightalign">3.635</td>
            </tr>
            <tr class="odd">
                <td>60</td>
                <td class="rightalign">36,957</td>
                <td>
                    <a href="/statistics/dominican-republic.html">Dominican Republic</a>
                </td>
                <td>DO</td>
                <td class="rightalign">48,730.0</td>
                <td class="rightalign">0.758</td>
                <td class="rightalign">10,627,165</td>
                <td class="rightalign">3.478</td>
            </tr>
            <tr>
                <td>61</td>
                <td class="rightalign">36,518</td>
                <td>
                    <a href="/statistics/greece.html">Greece</a>
                </td>
                <td>GR</td>
                <td class="rightalign">131,940.0</td>
                <td class="rightalign">0.277</td>
                <td class="rightalign">10,727,668</td>
                <td class="rightalign">3.404</td>
            </tr>
            <tr class="odd">
                <td>62</td>
                <td class="rightalign">36,314</td>
                <td>
                    <a href="/statistics/guatemala.html">Guatemala</a>
                </td>
                <td>GT</td>
                <td class="rightalign">108,890.0</td>
                <td class="rightalign">0.333</td>
                <td class="rightalign">17,247,807</td>
                <td class="rightalign">2.105</td>
            </tr>
            <tr>
                <td>63</td>
                <td class="rightalign">36,011</td>
                <td>
                    <a href="/statistics/bolivia.html">Bolivia</a>
                </td>
                <td>BO</td>
                <td class="rightalign">1,098,580.0</td>
                <td class="rightalign">0.033</td>
                <td class="rightalign">11,353,142</td>
                <td class="rightalign">3.172</td>
            </tr>
            <tr class="odd">
                <td>64</td>
                <td class="rightalign">34,803</td>
                <td>
                    <a href="/statistics/egypt.html">Egypt</a>
                </td>
                <td>EG</td>
                <td class="rightalign">1,001,450.0</td>
                <td class="rightalign">0.035</td>
                <td class="rightalign">98,423,595</td>
                <td class="rightalign">0.354</td>
            </tr>
            <tr>
                <td>65</td>
                <td class="rightalign">33,420</td>
                <td>
                    <a href="/statistics/lithuania.html">Lithuania</a>
                </td>
                <td>LT</td>
                <td class="rightalign">65,200.0</td>
                <td class="rightalign">0.513</td>
                <td class="rightalign">2,789,533</td>
                <td class="rightalign">11.980</td>
            </tr>
            <tr class="odd">
                <td>66</td>
                <td class="rightalign">31,891</td>
                <td>
                    <a href="/statistics/belarus.html">Belarus</a>
                </td>
                <td>BY</td>
                <td class="rightalign">207,600.0</td>
                <td class="rightalign">0.154</td>
                <td class="rightalign">9,485,386</td>
                <td class="rightalign">3.362</td>
            </tr>
            <tr>
                <td>67</td>
                <td class="rightalign">31,745</td>
                <td>
                    <a href="/statistics/armenia.html">Armenia</a>
                </td>
                <td>AM</td>
                <td class="rightalign">29,800.0</td>
                <td class="rightalign">1.065</td>
                <td class="rightalign">2,951,776</td>
                <td class="rightalign">10.755</td>
            </tr>
            <tr class="odd">
                <td>68</td>
                <td class="rightalign">31,189</td>
                <td>
                    <a href="/statistics/kenya.html">Kenya</a>
                </td>
                <td>KE</td>
                <td class="rightalign">582,650.0</td>
                <td class="rightalign">0.054</td>
                <td class="rightalign">51,393,010</td>
                <td class="rightalign">0.607</td>
            </tr>
            <tr>
                <td>69</td>
                <td class="rightalign">30,755</td>
                <td>
                    <a href="/statistics/panama.html">Panama</a>
                </td>
                <td>PA</td>
                <td class="rightalign">78,200.0</td>
                <td class="rightalign">0.393</td>
                <td class="rightalign">4,176,873</td>
                <td class="rightalign">7.363</td>
            </tr>
            <tr class="odd">
                <td>70</td>
                <td class="rightalign">29,333</td>
                <td>
                    <a href="/statistics/ireland.html">Ireland</a>
                </td>
                <td>IE</td>
                <td class="rightalign">70,280.0</td>
                <td class="rightalign">0.417</td>
                <td class="rightalign">4,853,506</td>
                <td class="rightalign">6.044</td>
            </tr>
            <tr>
                <td>71</td>
                <td class="rightalign">28,829</td>
                <td>
                    <a href="/statistics/zambia.html">Zambia</a>
                </td>
                <td>ZM</td>
                <td class="rightalign">752,614.0</td>
                <td class="rightalign">0.038</td>
                <td class="rightalign">17,351,822</td>
                <td class="rightalign">1.661</td>
            </tr>
            <tr class="odd">
                <td>72</td>
                <td class="rightalign">26,771</td>
                <td>
                    <a href="/statistics/uganda.html">Uganda</a>
                </td>
                <td>UG</td>
                <td class="rightalign">236,040.0</td>
                <td class="rightalign">0.113</td>
                <td class="rightalign">42,723,139</td>
                <td class="rightalign">0.627</td>
            </tr>
            <tr>
                <td>73</td>
                <td class="rightalign">26,712</td>
                <td>
                    <a href="/statistics/romania.html">Romania</a>
                </td>
                <td>RO</td>
                <td class="rightalign">237,500.0</td>
                <td class="rightalign">0.112</td>
                <td class="rightalign">19,473,936</td>
                <td class="rightalign">1.372</td>
            </tr>
            <tr class="odd">
                <td>74</td>
                <td class="rightalign">26,440</td>
                <td>
                    <a href="/statistics/croatia.html">Croatia</a>
                </td>
                <td>HR</td>
                <td class="rightalign">56,542.0</td>
                <td class="rightalign">0.468</td>
                <td class="rightalign">3,871,833</td>
                <td class="rightalign">6.829</td>
            </tr>
            <tr>
                <td>75</td>
                <td class="rightalign">26,284</td>
                <td>
                    <a href="/statistics/sudan.html">Sudan</a>
                </td>
                <td>SD</td>
                <td class="rightalign">1,861,484.0</td>
                <td class="rightalign">0.014</td>
                <td class="rightalign">41,801,533</td>
                <td class="rightalign">0.629</td>
            </tr>
            <tr class="odd">
                <td>76</td>
                <td class="rightalign">25,920</td>
                <td>
                    <a href="/statistics/saudi-arabia.html">Saudi Arabia</a>
                </td>
                <td>SA</td>
                <td class="rightalign">1,960,582.0</td>
                <td class="rightalign">0.013</td>
                <td class="rightalign">33,699,947</td>
                <td class="rightalign">0.769</td>
            </tr>
            <tr>
                <td>77</td>
                <td class="rightalign">25,787</td>
                <td>
                    <a href="/statistics/tunisia.html">Tunisia</a>
                </td>
                <td>TN</td>
                <td class="rightalign">163,610.0</td>
                <td class="rightalign">0.158</td>
                <td class="rightalign">11,565,204</td>
                <td class="rightalign">2.230</td>
            </tr>
            <tr class="odd">
                <td>78</td>
                <td class="rightalign">25,345</td>
                <td>
                    <a href="/statistics/laos.html">Laos</a>
                </td>
                <td>LA</td>
                <td class="rightalign">236,800.0</td>
                <td class="rightalign">0.107</td>
                <td class="rightalign">7,061,507</td>
                <td class="rightalign">3.589</td>
            </tr>
            <tr>
                <td>79</td>
                <td class="rightalign">25,160</td>
                <td>
                    <a href="/statistics/north-macedonia.html">North Macedonia</a>
                </td>
                <td>MK</td>
                <td class="rightalign">25,333.0</td>
                <td class="rightalign">0.993</td>
                <td class="rightalign">2,082,958</td>
                <td class="rightalign">12.079</td>
            </tr>
            <tr class="odd">
                <td>80</td>
                <td class="rightalign">24,800</td>
                <td>
                    <a href="/statistics/zimbabwe.html">Zimbabwe</a>
                </td>
                <td>ZW</td>
                <td class="rightalign">390,580.0</td>
                <td class="rightalign">0.063</td>
                <td class="rightalign">14,439,018</td>
                <td class="rightalign">1.718</td>
            </tr>
            <tr>
                <td>81</td>
                <td class="rightalign">24,693</td>
                <td>
                    <a href="/statistics/lebanon.html">Lebanon</a>
                </td>
                <td>LB</td>
                <td class="rightalign">10,400.0</td>
                <td class="rightalign">2.374</td>
                <td class="rightalign">6,848,925</td>
                <td class="rightalign">3.605</td>
            </tr>
            <tr class="odd">
                <td>82</td>
                <td class="rightalign">24,546</td>
                <td>
                    <a href="/statistics/hungary.html">Hungary</a>
                </td>
                <td>HU</td>
                <td class="rightalign">93,030.0</td>
                <td class="rightalign">0.264</td>
                <td class="rightalign">9,768,785</td>
                <td class="rightalign">2.513</td>
            </tr>
            <tr>
                <td>83</td>
                <td class="rightalign">24,455</td>
                <td>
                    <a href="/statistics/serbia.html">Serbia</a>
                </td>
                <td>RS</td>
                <td class="rightalign">88,361.0</td>
                <td class="rightalign">0.277</td>
                <td class="rightalign">6,982,084</td>
                <td class="rightalign">3.503</td>
            </tr>
            <tr class="odd">
                <td>84</td>
                <td class="rightalign">24,389</td>
                <td>
                    <a href="/statistics/niger.html">Niger</a>
                </td>
                <td>NE</td>
                <td class="rightalign">1,267,000.0</td>
                <td class="rightalign">0.019</td>
                <td class="rightalign">22,442,948</td>
                <td class="rightalign">1.087</td>
            </tr>
            <tr>
                <td>85</td>
                <td class="rightalign">24,275</td>
                <td>
                    <a href="/statistics/mali.html">Mali</a>
                </td>
                <td>ML</td>
                <td class="rightalign">1,240,000.0</td>
                <td class="rightalign">0.020</td>
                <td class="rightalign">19,077,690</td>
                <td class="rightalign">1.272</td>
            </tr>
            <tr class="odd">
                <td>86</td>
                <td class="rightalign">23,266</td>
                <td>
                    <a href="/statistics/ghana.html">Ghana</a>
                </td>
                <td>GH</td>
                <td class="rightalign">239,460.0</td>
                <td class="rightalign">0.097</td>
                <td class="rightalign">29,767,108</td>
                <td class="rightalign">0.782</td>
            </tr>
            <tr>
                <td>87</td>
                <td class="rightalign">22,992</td>
                <td>
                    <a href="/statistics/chad.html">Chad</a>
                </td>
                <td>TD</td>
                <td class="rightalign">1,284,000.0</td>
                <td class="rightalign">0.018</td>
                <td class="rightalign">15,477,751</td>
                <td class="rightalign">1.485</td>
            </tr>
            <tr class="odd">
                <td>88</td>
                <td class="rightalign">22,919</td>
                <td>
                    <a href="/statistics/cameroon.html">Cameroon</a>
                </td>
                <td>CM</td>
                <td class="rightalign">475,440.0</td>
                <td class="rightalign">0.048</td>
                <td class="rightalign">25,216,237</td>
                <td class="rightalign">0.909</td>
            </tr>
            <tr>
                <td>89</td>
                <td class="rightalign">22,813</td>
                <td>
                    <a href="/statistics/netherlands.html">Netherlands</a>
                </td>
                <td>NL</td>
                <td class="rightalign">41,526.0</td>
                <td class="rightalign">0.549</td>
                <td class="rightalign">17,231,017</td>
                <td class="rightalign">1.324</td>
            </tr>
            <tr class="odd">
                <td>90</td>
                <td class="rightalign">22,182</td>
                <td>
                    <a href="/statistics/libya.html">Libya</a>
                </td>
                <td>LY</td>
                <td class="rightalign">1,759,540.0</td>
                <td class="rightalign">0.013</td>
                <td class="rightalign">6,678,567</td>
                <td class="rightalign">3.321</td>
            </tr>
            <tr>
                <td>91</td>
                <td class="rightalign">21,853</td>
                <td>
                    <a href="/statistics/papua-new-guinea.html">Papua New Guinea</a>
                </td>
                <td>PG</td>
                <td class="rightalign">462,840.0</td>
                <td class="rightalign">0.047</td>
                <td class="rightalign">8,606,316</td>
                <td class="rightalign">2.539</td>
            </tr>
            <tr class="odd">
                <td>92</td>
                <td class="rightalign">21,259</td>
                <td>
                    <a href="/statistics/costa-rica.html">Costa Rica</a>
                </td>
                <td>CR</td>
                <td class="rightalign">51,100.0</td>
                <td class="rightalign">0.416</td>
                <td class="rightalign">4,999,441</td>
                <td class="rightalign">4.252</td>
            </tr>
            <tr>
                <td>93</td>
                <td class="rightalign">20,733</td>
                <td>
                    <a href="/statistics/rwanda.html">Rwanda</a>
                </td>
                <td>RW</td>
                <td class="rightalign">26,338.0</td>
                <td class="rightalign">0.787</td>
                <td class="rightalign">12,301,939</td>
                <td class="rightalign">1.685</td>
            </tr>
            <tr class="odd">
                <td>94</td>
                <td class="rightalign">20,495</td>
                <td>
                    <a href="/statistics/ethiopia.html">Ethiopia</a>
                </td>
                <td>ET</td>
                <td class="rightalign">1,127,127.0</td>
                <td class="rightalign">0.018</td>
                <td class="rightalign">109,224,559</td>
                <td class="rightalign">0.188</td>
            </tr>
            <tr>
                <td>95</td>
                <td class="rightalign">20,301</td>
                <td>
                    <a href="/statistics/belgium.html">Belgium</a>
                </td>
                <td>BE</td>
                <td class="rightalign">30,510.0</td>
                <td class="rightalign">0.665</td>
                <td class="rightalign">11,422,068</td>
                <td class="rightalign">1.777</td>
            </tr>
            <tr class="odd">
                <td>96</td>
                <td class="rightalign">19,372</td>
                <td>
                    <a href="/statistics/tanzania.html">Tanzania</a>
                </td>
                <td>TZ</td>
                <td class="rightalign">945,087.0</td>
                <td class="rightalign">0.020</td>
                <td class="rightalign">56,318,348</td>
                <td class="rightalign">0.344</td>
            </tr>
            <tr>
                <td>97</td>
                <td class="rightalign">19,318</td>
                <td>
                    <a href="/statistics/cambodia.html">Cambodia</a>
                </td>
                <td>KH</td>
                <td class="rightalign">181,040.0</td>
                <td class="rightalign">0.107</td>
                <td class="rightalign">16,249,798</td>
                <td class="rightalign">1.189</td>
            </tr>
            <tr class="odd">
                <td>98</td>
                <td class="rightalign">19,035</td>
                <td>
                    <a href="/statistics/honduras.html">Honduras</a>
                </td>
                <td>HN</td>
                <td class="rightalign">112,090.0</td>
                <td class="rightalign">0.170</td>
                <td class="rightalign">9,587,522</td>
                <td class="rightalign">1.985</td>
            </tr>
            <tr>
                <td>99</td>
                <td class="rightalign">18,531</td>
                <td>
                    <a href="/statistics/antarctica.html">Antarctica</a>
                </td>
                <td>AQ</td>
                <td class="rightalign">14,000,000.0</td>
                <td class="rightalign">0.001</td>
                <td class="rightalign">0</td>
                <td class="rightalign"></td>
            </tr>
            <tr class="odd">
                <td>100</td>
                <td class="rightalign">18,506</td>
                <td>
                    <a href="/statistics/paraguay.html">Paraguay</a>
                </td>
                <td>PY</td>
                <td class="rightalign">406,750.0</td>
                <td class="rightalign">0.045</td>
                <td class="rightalign">6,956,071</td>
                <td class="rightalign">2.660</td>
            </tr>
            <tr>
                <td>101</td>
                <td class="rightalign">18,206</td>
                <td>
                    <a href="/statistics/bulgaria.html">Bulgaria</a>
                </td>
                <td>BG</td>
                <td class="rightalign">110,910.0</td>
                <td class="rightalign">0.164</td>
                <td class="rightalign">7,000,039</td>
                <td class="rightalign">2.601</td>
            </tr>
            <tr class="odd">
                <td>102</td>
                <td class="rightalign">17,839</td>
                <td>
                    <a href="/statistics/ivory-coast.html">Ivory Coast</a>
                </td>
                <td>CI</td>
                <td class="rightalign">322,460.0</td>
                <td class="rightalign">0.055</td>
                <td class="rightalign">25,069,229</td>
                <td class="rightalign">0.712</td>
            </tr>
            <tr>
                <td>103</td>
                <td class="rightalign">17,826</td>
                <td>
                    <a href="/statistics/fiji.html">Fiji</a>
                </td>
                <td>FJ</td>
                <td class="rightalign">18,270.0</td>
                <td class="rightalign">0.976</td>
                <td class="rightalign">883,483</td>
                <td class="rightalign">20.177</td>
            </tr>
            <tr class="odd">
                <td>104</td>
                <td class="rightalign">17,470</td>
                <td>
                    <a href="/statistics/somalia.html">Somalia</a>
                </td>
                <td>SO</td>
                <td class="rightalign">637,657.0</td>
                <td class="rightalign">0.027</td>
                <td class="rightalign">15,008,154</td>
                <td class="rightalign">1.164</td>
            </tr>
            <tr>
                <td>105</td>
                <td class="rightalign">17,226</td>
                <td>
                    <a href="/statistics/sierra-leone.html">Sierra Leone</a>
                </td>
                <td>SL</td>
                <td class="rightalign">71,740.0</td>
                <td class="rightalign">0.240</td>
                <td class="rightalign">7,650,154</td>
                <td class="rightalign">2.252</td>
            </tr>
            <tr class="odd">
                <td>106</td>
                <td class="rightalign">16,696</td>
                <td>
                    <a href="/statistics/ecuador.html">Ecuador</a>
                </td>
                <td>EC</td>
                <td class="rightalign">283,560.0</td>
                <td class="rightalign">0.059</td>
                <td class="rightalign">17,084,357</td>
                <td class="rightalign">0.977</td>
            </tr>
            <tr>
                <td>107</td>
                <td class="rightalign">16,583</td>
                <td>
                    <a href="/statistics/haiti.html">Haiti</a>
                </td>
                <td>HT</td>
                <td class="rightalign">27,750.0</td>
                <td class="rightalign">0.598</td>
                <td class="rightalign">11,123,176</td>
                <td class="rightalign">1.491</td>
            </tr>
            <tr class="odd">
                <td>108</td>
                <td class="rightalign">16,259</td>
                <td>
                    <a href="/statistics/iceland.html">Iceland</a>
                </td>
                <td>IS</td>
                <td class="rightalign">103,000.0</td>
                <td class="rightalign">0.158</td>
                <td class="rightalign">353,574</td>
                <td class="rightalign">45.985</td>
            </tr>
            <tr>
                <td>109</td>
                <td class="rightalign">15,383</td>
                <td>
                    <a href="/statistics/central-african-republic.html">Central African Republic</a>
                </td>
                <td>CF</td>
                <td class="rightalign">622,984.0</td>
                <td class="rightalign">0.025</td>
                <td class="rightalign">4,666,377</td>
                <td class="rightalign">3.297</td>
            </tr>
            <tr class="odd">
                <td>110</td>
                <td class="rightalign">15,181</td>
                <td>
                    <a href="/statistics/estonia.html">Estonia</a>
                </td>
                <td>EE</td>
                <td class="rightalign">45,226.0</td>
                <td class="rightalign">0.336</td>
                <td class="rightalign">1,320,884</td>
                <td class="rightalign">11.493</td>
            </tr>
            <tr>
                <td>111</td>
                <td class="rightalign">15,100</td>
                <td>
                    <a href="/statistics/denmark.html">Denmark</a>
                </td>
                <td>DK</td>
                <td class="rightalign">43,094.0</td>
                <td class="rightalign">0.350</td>
                <td class="rightalign">5,797,446</td>
                <td class="rightalign">2.605</td>
            </tr>
            <tr class="odd">
                <td>112</td>
                <td class="rightalign">14,143</td>
                <td>
                    <a href="/statistics/montenegro.html">Montenegro</a>
                </td>
                <td>ME</td>
                <td class="rightalign">14,026.0</td>
                <td class="rightalign">1.008</td>
                <td class="rightalign">622,345</td>
                <td class="rightalign">22.725</td>
            </tr>
            <tr>
                <td>113</td>
                <td class="rightalign">14,117</td>
                <td>
                    <a href="/statistics/burundi.html">Burundi</a>
                </td>
                <td>BI</td>
                <td class="rightalign">27,830.0</td>
                <td class="rightalign">0.507</td>
                <td class="rightalign">11,175,378</td>
                <td class="rightalign">1.263</td>
            </tr>
            <tr class="odd">
                <td>114</td>
                <td class="rightalign">13,234</td>
                <td>
                    <a href="/statistics/malawi.html">Malawi</a>
                </td>
                <td>MW</td>
                <td class="rightalign">118,480.0</td>
                <td class="rightalign">0.112</td>
                <td class="rightalign">17,563,749</td>
                <td class="rightalign">0.753</td>
            </tr>
            <tr>
                <td>115</td>
                <td class="rightalign">13,171</td>
                <td>
                    <a href="/statistics/jordan.html">Jordan</a>
                </td>
                <td>JO</td>
                <td class="rightalign">92,300.0</td>
                <td class="rightalign">0.143</td>
                <td class="rightalign">9,956,011</td>
                <td class="rightalign">1.323</td>
            </tr>
            <tr class="odd">
                <td>116</td>
                <td class="rightalign">12,338</td>
                <td>
                    <a href="/statistics/oman.html">Oman</a>
                </td>
                <td>OM</td>
                <td class="rightalign">212,460.0</td>
                <td class="rightalign">0.058</td>
                <td class="rightalign">4,829,483</td>
                <td class="rightalign">2.555</td>
            </tr>
            <tr>
                <td>117</td>
                <td class="rightalign">12,300</td>
                <td>
                    <a href="/statistics/senegal.html">Senegal</a>
                </td>
                <td>SN</td>
                <td class="rightalign">196,190.0</td>
                <td class="rightalign">0.063</td>
                <td class="rightalign">15,854,360</td>
                <td class="rightalign">0.776</td>
            </tr>
            <tr class="odd">
                <td>118</td>
                <td class="rightalign">12,107</td>
                <td>
                    <a href="/statistics/south-sudan.html">South Sudan</a>
                </td>
                <td>SS</td>
                <td class="rightalign">644,329.0</td>
                <td class="rightalign">0.019</td>
                <td class="rightalign">8,260,490</td>
                <td class="rightalign">1.466</td>
            </tr>
            <tr>
                <td>119</td>
                <td class="rightalign">11,632</td>
                <td>
                    <a href="/statistics/burkina-faso.html">Burkina Faso</a>
                </td>
                <td>BF</td>
                <td class="rightalign">274,200.0</td>
                <td class="rightalign">0.042</td>
                <td class="rightalign">19,751,535</td>
                <td class="rightalign">0.589</td>
            </tr>
            <tr class="odd">
                <td>120</td>
                <td class="rightalign">11,226</td>
                <td>
                    <a href="/statistics/slovakia.html">Slovakia</a>
                </td>
                <td>SK</td>
                <td class="rightalign">48,845.0</td>
                <td class="rightalign">0.230</td>
                <td class="rightalign">5,447,011</td>
                <td class="rightalign">2.061</td>
            </tr>
            <tr>
                <td>121</td>
                <td class="rightalign">11,106</td>
                <td>
                    <a href="/statistics/uzbekistan.html">Uzbekistan</a>
                </td>
                <td>UZ</td>
                <td class="rightalign">447,400.0</td>
                <td class="rightalign">0.025</td>
                <td class="rightalign">32,955,400</td>
                <td class="rightalign">0.337</td>
            </tr>
            <tr class="odd">
                <td>122</td>
                <td class="rightalign">10,879</td>
                <td>
                    <a href="/statistics/guinea.html">Guinea</a>
                </td>
                <td>GN</td>
                <td class="rightalign">245,857.0</td>
                <td class="rightalign">0.044</td>
                <td class="rightalign">12,414,318</td>
                <td class="rightalign">0.876</td>
            </tr>
            <tr>
                <td>123</td>
                <td class="rightalign">10,184</td>
                <td>
                    <a href="/statistics/israel.html">Israel</a>
                </td>
                <td>IL</td>
                <td class="rightalign">20,770.0</td>
                <td class="rightalign">0.490</td>
                <td class="rightalign">8,883,800</td>
                <td class="rightalign">1.146</td>
            </tr>
            <tr class="odd">
                <td>124</td>
                <td class="rightalign">10,162</td>
                <td>
                    <a href="/statistics/azerbaijan.html">Azerbaijan</a>
                </td>
                <td>AZ</td>
                <td class="rightalign">86,600.0</td>
                <td class="rightalign">0.117</td>
                <td class="rightalign">9,942,334</td>
                <td class="rightalign">1.022</td>
            </tr>
            <tr>
                <td>125</td>
                <td class="rightalign">10,122</td>
                <td>
                    <a href="/statistics/congo-republic.html">Congo Republic</a>
                </td>
                <td>CG</td>
                <td class="rightalign">342,000.0</td>
                <td class="rightalign">0.030</td>
                <td class="rightalign">5,244,363</td>
                <td class="rightalign">1.930</td>
            </tr>
            <tr class="odd">
                <td>126</td>
                <td class="rightalign">9,894</td>
                <td>
                    <a href="/statistics/latvia.html">Latvia</a>
                </td>
                <td>LV</td>
                <td class="rightalign">64,589.0</td>
                <td class="rightalign">0.153</td>
                <td class="rightalign">1,926,542</td>
                <td class="rightalign">5.136</td>
            </tr>
            <tr>
                <td>127</td>
                <td class="rightalign">9,406</td>
                <td>
                    <a href="/statistics/albania.html">Albania</a>
                </td>
                <td>AL</td>
                <td class="rightalign">28,748.0</td>
                <td class="rightalign">0.327</td>
                <td class="rightalign">2,866,376</td>
                <td class="rightalign">3.281</td>
            </tr>
            <tr class="odd">
                <td>128</td>
                <td class="rightalign">9,393</td>
                <td>
                    <a href="/statistics/solomon-islands.html">Solomon Islands</a>
                </td>
                <td>SB</td>
                <td class="rightalign">28,450.0</td>
                <td class="rightalign">0.330</td>
                <td class="rightalign">652,858</td>
                <td class="rightalign">14.388</td>
            </tr>
            <tr>
                <td>129</td>
                <td class="rightalign">9,242</td>
                <td>
                    <a href="/statistics/georgia.html">Georgia</a>
                </td>
                <td>GE</td>
                <td class="rightalign">69,700.0</td>
                <td class="rightalign">0.133</td>
                <td class="rightalign">3,731,000</td>
                <td class="rightalign">2.477</td>
            </tr>
            <tr class="odd">
                <td>130</td>
                <td class="rightalign">8,846</td>
                <td>
                    <a href="/statistics/mauritania.html">Mauritania</a>
                </td>
                <td>MR</td>
                <td class="rightalign">1,030,700.0</td>
                <td class="rightalign">0.009</td>
                <td class="rightalign">4,403,319</td>
                <td class="rightalign">2.009</td>
            </tr>
            <tr>
                <td>131</td>
                <td class="rightalign">8,797</td>
                <td>
                    <a href="/statistics/liberia.html">Liberia</a>
                </td>
                <td>LR</td>
                <td class="rightalign">111,370.0</td>
                <td class="rightalign">0.079</td>
                <td class="rightalign">4,818,977</td>
                <td class="rightalign">1.825</td>
            </tr>
            <tr class="odd">
                <td>132</td>
                <td class="rightalign">8,280</td>
                <td>
                    <a href="/statistics/puerto-rico.html">Puerto Rico</a>
                </td>
                <td>PR</td>
                <td class="rightalign">9,104.0</td>
                <td class="rightalign">0.909</td>
                <td class="rightalign">3,195,153</td>
                <td class="rightalign">2.591</td>
            </tr>
            <tr>
                <td>133</td>
                <td class="rightalign">8,206</td>
                <td>
                    <a href="/statistics/el-salvador.html">El Salvador</a>
                </td>
                <td>SV</td>
                <td class="rightalign">21,040.0</td>
                <td class="rightalign">0.390</td>
                <td class="rightalign">6,420,744</td>
                <td class="rightalign">1.278</td>
            </tr>
            <tr class="odd">
                <td>134</td>
                <td class="rightalign">8,175</td>
                <td>
                    <a href="/statistics/kyrgyzstan.html">Kyrgyzstan</a>
                </td>
                <td>KG</td>
                <td class="rightalign">198,500.0</td>
                <td class="rightalign">0.041</td>
                <td class="rightalign">6,315,800</td>
                <td class="rightalign">1.294</td>
            </tr>
            <tr>
                <td>135</td>
                <td class="rightalign">8,128</td>
                <td>
                    <a href="/statistics/slovenia.html">Slovenia</a>
                </td>
                <td>SI</td>
                <td class="rightalign">20,273.0</td>
                <td class="rightalign">0.401</td>
                <td class="rightalign">2,067,372</td>
                <td class="rightalign">3.932</td>
            </tr>
            <tr class="odd">
                <td>136</td>
                <td class="rightalign">8,112</td>
                <td>
                    <a href="/statistics/uruguay.html">Uruguay</a>
                </td>
                <td>UY</td>
                <td class="rightalign">176,220.0</td>
                <td class="rightalign">0.046</td>
                <td class="rightalign">3,449,299</td>
                <td class="rightalign">2.352</td>
            </tr>
            <tr>
                <td>137</td>
                <td class="rightalign">8,044</td>
                <td>
                    <a href="/statistics/namibia.html">Namibia</a>
                </td>
                <td>NA</td>
                <td class="rightalign">825,418.0</td>
                <td class="rightalign">0.010</td>
                <td class="rightalign">2,448,255</td>
                <td class="rightalign">3.286</td>
            </tr>
            <tr class="odd">
                <td>138</td>
                <td class="rightalign">7,843</td>
                <td>
                    <a href="/statistics/timor-leste.html">Timor-Leste</a>
                </td>
                <td>TL</td>
                <td class="rightalign">15,007.0</td>
                <td class="rightalign">0.523</td>
                <td class="rightalign">1,267,972</td>
                <td class="rightalign">6.185</td>
            </tr>
            <tr>
                <td>139</td>
                <td class="rightalign">7,576</td>
                <td>
                    <a href="/statistics/cyprus.html">Cyprus</a>
                </td>
                <td>CY</td>
                <td class="rightalign">9,250.0</td>
                <td class="rightalign">0.819</td>
                <td class="rightalign">1,189,265</td>
                <td class="rightalign">6.370</td>
            </tr>
            <tr class="odd">
                <td>140</td>
                <td class="rightalign">7,529</td>
                <td>
                    <a href="/statistics/greenland.html">Greenland</a>
                </td>
                <td>GL</td>
                <td class="rightalign">2,166,086.0</td>
                <td class="rightalign">0.003</td>
                <td class="rightalign">56,025</td>
                <td class="rightalign">134.386</td>
            </tr>
            <tr>
                <td>141</td>
                <td class="rightalign">7,053</td>
                <td>
                    <a href="/statistics/mongolia.html">Mongolia</a>
                </td>
                <td>MN</td>
                <td class="rightalign">1,565,000.0</td>
                <td class="rightalign">0.005</td>
                <td class="rightalign">3,170,208</td>
                <td class="rightalign">2.225</td>
            </tr>
            <tr class="odd">
                <td>142</td>
                <td class="rightalign">6,931</td>
                <td>
                    <a href="/statistics/guinea-bissau.html">Guinea-Bissau</a>
                </td>
                <td>GW</td>
                <td class="rightalign">36,120.0</td>
                <td class="rightalign">0.192</td>
                <td class="rightalign">1,874,309</td>
                <td class="rightalign">3.698</td>
            </tr>
            <tr>
                <td>143</td>
                <td class="rightalign">6,862</td>
                <td>
                    <a href="/statistics/gabon.html">Gabon</a>
                </td>
                <td>GA</td>
                <td class="rightalign">267,667.0</td>
                <td class="rightalign">0.026</td>
                <td class="rightalign">2,119,275</td>
                <td class="rightalign">3.238</td>
            </tr>
            <tr class="odd">
                <td>144</td>
                <td class="rightalign">6,433</td>
                <td>
                    <a href="/statistics/nicaragua.html">Nicaragua</a>
                </td>
                <td>NI</td>
                <td class="rightalign">129,494.0</td>
                <td class="rightalign">0.050</td>
                <td class="rightalign">6,465,513</td>
                <td class="rightalign">0.995</td>
            </tr>
            <tr>
                <td>145</td>
                <td class="rightalign">6,397</td>
                <td>
                    <a href="/statistics/kosovo.html">Kosovo</a>
                </td>
                <td>XK</td>
                <td class="rightalign">10,908.0</td>
                <td class="rightalign">0.586</td>
                <td class="rightalign">1,845,300</td>
                <td class="rightalign">3.467</td>
            </tr>
            <tr class="odd">
                <td>146</td>
                <td class="rightalign">6,311</td>
                <td>
                    <a href="/statistics/eritrea.html">Eritrea</a>
                </td>
                <td>ER</td>
                <td class="rightalign">121,320.0</td>
                <td class="rightalign">0.052</td>
                <td class="rightalign">6,209,262</td>
                <td class="rightalign">1.016</td>
            </tr>
            <tr>
                <td>147</td>
                <td class="rightalign">6,276</td>
                <td>
                    <a href="/statistics/united-arab-emirates.html">United Arab Emirates</a>
                </td>
                <td>AE</td>
                <td class="rightalign">82,880.0</td>
                <td class="rightalign">0.076</td>
                <td class="rightalign">9,630,959</td>
                <td class="rightalign">0.652</td>
            </tr>
            <tr class="odd">
                <td>148</td>
                <td class="rightalign">6,141</td>
                <td>
                    <a href="/statistics/palestine.html">Palestine</a>
                </td>
                <td>PS</td>
                <td class="rightalign">5,970.0</td>
                <td class="rightalign">1.029</td>
                <td class="rightalign">4,569,087</td>
                <td class="rightalign">1.344</td>
            </tr>
            <tr>
                <td>149</td>
                <td class="rightalign">6,073</td>
                <td>
                    <a href="/statistics/guyana.html">Guyana</a>
                </td>
                <td>GY</td>
                <td class="rightalign">214,970.0</td>
                <td class="rightalign">0.028</td>
                <td class="rightalign">779,004</td>
                <td class="rightalign">7.796</td>
            </tr>
            <tr class="odd">
                <td>150</td>
                <td class="rightalign">5,961</td>
                <td>
                    <a href="/statistics/benin.html">Benin</a>
                </td>
                <td>BJ</td>
                <td class="rightalign">112,620.0</td>
                <td class="rightalign">0.053</td>
                <td class="rightalign">11,485,048</td>
                <td class="rightalign">0.519</td>
            </tr>
            <tr>
                <td>151</td>
                <td class="rightalign">5,781</td>
                <td>
                    <a href="/statistics/togo.html">Togo</a>
                </td>
                <td>TG</td>
                <td class="rightalign">56,785.0</td>
                <td class="rightalign">0.102</td>
                <td class="rightalign">7,889,094</td>
                <td class="rightalign">0.733</td>
            </tr>
            <tr class="odd">
                <td>152</td>
                <td class="rightalign">5,715</td>
                <td>
                    <a href="/statistics/turkmenistan.html">Turkmenistan</a>
                </td>
                <td>TM</td>
                <td class="rightalign">488,100.0</td>
                <td class="rightalign">0.012</td>
                <td class="rightalign">5,850,908</td>
                <td class="rightalign">0.977</td>
            </tr>
            <tr>
                <td>153</td>
                <td class="rightalign">5,541</td>
                <td>
                    <a href="/statistics/svalbard-and-jan-mayen.html">Svalbard and Jan Mayen</a>
                </td>
                <td>SJ</td>
                <td class="rightalign">62,049.0</td>
                <td class="rightalign">0.089</td>
                <td class="rightalign">2,550</td>
                <td class="rightalign">2,172.941</td>
            </tr>
            <tr class="odd">
                <td>154</td>
                <td class="rightalign">5,488</td>
                <td>
                    <a href="/statistics/djibouti.html">Djibouti</a>
                </td>
                <td>DJ</td>
                <td class="rightalign">23,000.0</td>
                <td class="rightalign">0.239</td>
                <td class="rightalign">958,920</td>
                <td class="rightalign">5.723</td>
            </tr>
            <tr>
                <td>155</td>
                <td class="rightalign">5,335</td>
                <td>
                    <a href="/statistics/new-caledonia.html">New Caledonia</a>
                </td>
                <td>NC</td>
                <td class="rightalign">19,060.0</td>
                <td class="rightalign">0.280</td>
                <td class="rightalign">284,060</td>
                <td class="rightalign">18.781</td>
            </tr>
            <tr class="odd">
                <td>156</td>
                <td class="rightalign">5,064</td>
                <td>
                    <a href="/statistics/jamaica.html">Jamaica</a>
                </td>
                <td>JM</td>
                <td class="rightalign">10,991.0</td>
                <td class="rightalign">0.461</td>
                <td class="rightalign">2,934,855</td>
                <td class="rightalign">1.725</td>
            </tr>
            <tr>
                <td>157</td>
                <td class="rightalign">4,902</td>
                <td>
                    <a href="/statistics/vanuatu.html">Vanuatu</a>
                </td>
                <td>VU</td>
                <td class="rightalign">12,200.0</td>
                <td class="rightalign">0.402</td>
                <td class="rightalign">292,680</td>
                <td class="rightalign">16.749</td>
            </tr>
            <tr class="odd">
                <td>158</td>
                <td class="rightalign">4,406</td>
                <td>
                    <a href="/statistics/equatorial-guinea.html">Equatorial Guinea</a>
                </td>
                <td>GQ</td>
                <td class="rightalign">28,051.0</td>
                <td class="rightalign">0.157</td>
                <td class="rightalign">1,308,974</td>
                <td class="rightalign">3.366</td>
            </tr>
            <tr>
                <td>159</td>
                <td class="rightalign">4,381</td>
                <td>
                    <a href="/statistics/tajikistan.html">Tajikistan</a>
                </td>
                <td>TJ</td>
                <td class="rightalign">143,100.0</td>
                <td class="rightalign">0.031</td>
                <td class="rightalign">9,100,837</td>
                <td class="rightalign">0.481</td>
            </tr>
            <tr class="odd">
                <td>160</td>
                <td class="rightalign">4,316</td>
                <td>
                    <a href="/statistics/french-polynesia.html">French Polynesia</a>
                </td>
                <td>PF</td>
                <td class="rightalign">4,167.0</td>
                <td class="rightalign">1.036</td>
                <td class="rightalign">277,679</td>
                <td class="rightalign">15.543</td>
            </tr>
            <tr>
                <td>161</td>
                <td class="rightalign">4,114</td>
                <td>
                    <a href="/statistics/qatar.html">Qatar</a>
                </td>
                <td>QA</td>
                <td class="rightalign">11,437.0</td>
                <td class="rightalign">0.360</td>
                <td class="rightalign">2,781,677</td>
                <td class="rightalign">1.479</td>
            </tr>
            <tr class="odd">
                <td>162</td>
                <td class="rightalign">4,032</td>
                <td>
                    <a href="/statistics/guadeloupe.html">Guadeloupe</a>
                </td>
                <td>GP</td>
                <td class="rightalign">1,780.0</td>
                <td class="rightalign">2.265</td>
                <td class="rightalign">443,000</td>
                <td class="rightalign">9.102</td>
            </tr>
            <tr>
                <td>163</td>
                <td class="rightalign">3,938</td>
                <td>
                    <a href="/statistics/botswana.html">Botswana</a>
                </td>
                <td>BW</td>
                <td class="rightalign">600,370.0</td>
                <td class="rightalign">0.007</td>
                <td class="rightalign">2,254,126</td>
                <td class="rightalign">1.747</td>
            </tr>
            <tr class="odd">
                <td>164</td>
                <td class="rightalign">3,708</td>
                <td>
                    <a href="/statistics/french-guiana.html">French Guiana</a>
                </td>
                <td>GF</td>
                <td class="rightalign">91,000.0</td>
                <td class="rightalign">0.041</td>
                <td class="rightalign">195,506</td>
                <td class="rightalign">18.966</td>
            </tr>
            <tr>
                <td>165</td>
                <td class="rightalign">3,650</td>
                <td>
                    <a href="/statistics/aland.html">Åland</a>
                </td>
                <td>AX</td>
                <td class="rightalign">1,580.0</td>
                <td class="rightalign">2.310</td>
                <td class="rightalign">26,711</td>
                <td class="rightalign">136.648</td>
            </tr>
            <tr class="odd">
                <td>166</td>
                <td class="rightalign">3,279</td>
                <td>
                    <a href="/statistics/andorra.html">Andorra</a>
                </td>
                <td>AD</td>
                <td class="rightalign">468.0</td>
                <td class="rightalign">7.006</td>
                <td class="rightalign">77,006</td>
                <td class="rightalign">42.581</td>
            </tr>
            <tr>
                <td>167</td>
                <td class="rightalign">3,135</td>
                <td>
                    <a href="/statistics/martinique.html">Martinique</a>
                </td>
                <td>MQ</td>
                <td class="rightalign">1,100.0</td>
                <td class="rightalign">2.850</td>
                <td class="rightalign">432,900</td>
                <td class="rightalign">7.242</td>
            </tr>
            <tr class="odd">
                <td>168</td>
                <td class="rightalign">2,923</td>
                <td>
                    <a href="/statistics/malta.html">Malta</a>
                </td>
                <td>MT</td>
                <td class="rightalign">316.0</td>
                <td class="rightalign">9.250</td>
                <td class="rightalign">483,530</td>
                <td class="rightalign">6.045</td>
            </tr>
            <tr>
                <td>169</td>
                <td class="rightalign">2,616</td>
                <td>
                    <a href="/statistics/micronesia.html">Micronesia</a>
                </td>
                <td>FM</td>
                <td class="rightalign">702.0</td>
                <td class="rightalign">3.726</td>
                <td class="rightalign">112,640</td>
                <td class="rightalign">23.224</td>
            </tr>
            <tr class="odd">
                <td>170</td>
                <td class="rightalign">2,546</td>
                <td>
                    <a href="/statistics/hong-kong.html">Hong Kong</a>
                </td>
                <td>HK</td>
                <td class="rightalign">1,092.0</td>
                <td class="rightalign">2.332</td>
                <td class="rightalign">7,451,000</td>
                <td class="rightalign">0.342</td>
            </tr>
            <tr>
                <td>171</td>
                <td class="rightalign">2,500</td>
                <td>
                    <a href="/statistics/moldova.html">Moldova</a>
                </td>
                <td>MD</td>
                <td class="rightalign">33,843.0</td>
                <td class="rightalign">0.074</td>
                <td class="rightalign">3,545,883</td>
                <td class="rightalign">0.705</td>
            </tr>
            <tr class="odd">
                <td>172</td>
                <td class="rightalign">2,480</td>
                <td>
                    <a href="/statistics/bahamas.html">Bahamas</a>
                </td>
                <td>BS</td>
                <td class="rightalign">13,940.0</td>
                <td class="rightalign">0.178</td>
                <td class="rightalign">385,640</td>
                <td class="rightalign">6.431</td>
            </tr>
            <tr>
                <td>173</td>
                <td class="rightalign">2,470</td>
                <td>
                    <a href="/statistics/suriname.html">Suriname</a>
                </td>
                <td>SR</td>
                <td class="rightalign">163,270.0</td>
                <td class="rightalign">0.015</td>
                <td class="rightalign">575,991</td>
                <td class="rightalign">4.288</td>
            </tr>
            <tr class="odd">
                <td>174</td>
                <td class="rightalign">2,409</td>
                <td>
                    <a href="/statistics/the-gambia.html">The Gambia</a>
                </td>
                <td>GM</td>
                <td class="rightalign">11,300.0</td>
                <td class="rightalign">0.213</td>
                <td class="rightalign">2,280,102</td>
                <td class="rightalign">1.057</td>
            </tr>
            <tr>
                <td>175</td>
                <td class="rightalign">2,314</td>
                <td>
                    <a href="/statistics/belize.html">Belize</a>
                </td>
                <td>BZ</td>
                <td class="rightalign">22,966.0</td>
                <td class="rightalign">0.101</td>
                <td class="rightalign">383,071</td>
                <td class="rightalign">6.041</td>
            </tr>
            <tr class="odd">
                <td>176</td>
                <td class="rightalign">2,271</td>
                <td>
                    <a href="/statistics/western-sahara.html">Western Sahara</a>
                </td>
                <td>EH</td>
                <td class="rightalign">266,000.0</td>
                <td class="rightalign">0.009</td>
                <td class="rightalign">273,008</td>
                <td class="rightalign">8.318</td>
            </tr>
            <tr>
                <td>177</td>
                <td class="rightalign">2,102</td>
                <td>
                    <a href="/statistics/reunion.html">Réunion</a>
                </td>
                <td>RE</td>
                <td class="rightalign">2,517.0</td>
                <td class="rightalign">0.835</td>
                <td class="rightalign">776,948</td>
                <td class="rightalign">2.705</td>
            </tr>
            <tr class="odd">
                <td>178</td>
                <td class="rightalign">1,959</td>
                <td>
                    <a href="/statistics/singapore.html">Singapore</a>
                </td>
                <td>SG</td>
                <td class="rightalign">692.7</td>
                <td class="rightalign">2.828</td>
                <td class="rightalign">5,638,676</td>
                <td class="rightalign">0.347</td>
            </tr>
            <tr>
                <td>179</td>
                <td class="rightalign">1,902</td>
                <td>
                    <a href="/statistics/faroe-islands.html">Faroe Islands</a>
                </td>
                <td>FO</td>
                <td class="rightalign">1,399.0</td>
                <td class="rightalign">1.360</td>
                <td class="rightalign">48,497</td>
                <td class="rightalign">39.219</td>
            </tr>
            <tr class="odd">
                <td>180</td>
                <td class="rightalign">1,871</td>
                <td>
                    <a href="/statistics/u-s-virgin-islands.html">U.S. Virgin Islands</a>
                </td>
                <td>VI</td>
                <td class="rightalign">352.0</td>
                <td class="rightalign">5.315</td>
                <td class="rightalign">106,977</td>
                <td class="rightalign">17.490</td>
            </tr>
            <tr>
                <td>181</td>
                <td class="rightalign">1,845</td>
                <td>
                    <a href="/statistics/liechtenstein.html">Liechtenstein</a>
                </td>
                <td>LI</td>
                <td class="rightalign">160.0</td>
                <td class="rightalign">11.531</td>
                <td class="rightalign">37,910</td>
                <td class="rightalign">48.668</td>
            </tr>
            <tr class="odd">
                <td>182</td>
                <td class="rightalign">1,826</td>
                <td>
                    <a href="/statistics/trinidad-and-tobago.html">Trinidad and Tobago</a>
                </td>
                <td>TT</td>
                <td class="rightalign">5,128.0</td>
                <td class="rightalign">0.356</td>
                <td class="rightalign">1,389,858</td>
                <td class="rightalign">1.314</td>
            </tr>
            <tr>
                <td>183</td>
                <td class="rightalign">1,704</td>
                <td>
                    <a href="/statistics/mauritius.html">Mauritius</a>
                </td>
                <td>MU</td>
                <td class="rightalign">2,040.0</td>
                <td class="rightalign">0.835</td>
                <td class="rightalign">1,265,303</td>
                <td class="rightalign">1.347</td>
            </tr>
            <tr class="odd">
                <td>184</td>
                <td class="rightalign">1,647</td>
                <td>
                    <a href="/statistics/french-southern-territories.html">French Southern Territories</a>
                </td>
                <td>TF</td>
                <td class="rightalign">7,829.0</td>
                <td class="rightalign">0.210</td>
                <td class="rightalign">140</td>
                <td class="rightalign">11,764.286</td>
            </tr>
            <tr>
                <td>185</td>
                <td class="rightalign">1,535</td>
                <td>
                    <a href="/statistics/saint-lucia.html">Saint Lucia</a>
                </td>
                <td>LC</td>
                <td class="rightalign">616.0</td>
                <td class="rightalign">2.492</td>
                <td class="rightalign">181,889</td>
                <td class="rightalign">8.439</td>
            </tr>
            <tr class="odd">
                <td>186</td>
                <td class="rightalign">1,428</td>
                <td>
                    <a href="/statistics/lesotho.html">Lesotho</a>
                </td>
                <td>LS</td>
                <td class="rightalign">30,355.0</td>
                <td class="rightalign">0.047</td>
                <td class="rightalign">2,108,132</td>
                <td class="rightalign">0.677</td>
            </tr>
            <tr>
                <td>187</td>
                <td class="rightalign">1,320</td>
                <td>
                    <a href="/statistics/cabo-verde.html">Cabo Verde</a>
                </td>
                <td>CV</td>
                <td class="rightalign">4,033.0</td>
                <td class="rightalign">0.327</td>
                <td class="rightalign">543,767</td>
                <td class="rightalign">2.428</td>
            </tr>
            <tr class="odd">
                <td>188</td>
                <td class="rightalign">1,316</td>
                <td>
                    <a href="/statistics/marshall-islands.html">Marshall Islands</a>
                </td>
                <td>MH</td>
                <td class="rightalign">181.3</td>
                <td class="rightalign">7.259</td>
                <td class="rightalign">58,413</td>
                <td class="rightalign">22.529</td>
            </tr>
            <tr>
                <td>189</td>
                <td class="rightalign">1,254</td>
                <td>
                    <a href="/statistics/maldives.html">Maldives</a>
                </td>
                <td>MV</td>
                <td class="rightalign">300.0</td>
                <td class="rightalign">4.180</td>
                <td class="rightalign">515,696</td>
                <td class="rightalign">2.432</td>
            </tr>
            <tr class="odd">
                <td>190</td>
                <td class="rightalign">1,218</td>
                <td>
                    <a href="/statistics/luxembourg.html">Luxembourg</a>
                </td>
                <td>LU</td>
                <td class="rightalign">2,586.0</td>
                <td class="rightalign">0.471</td>
                <td class="rightalign">607,728</td>
                <td class="rightalign">2.004</td>
            </tr>
            <tr>
                <td>191</td>
                <td class="rightalign">1,216</td>
                <td>
                    <a href="/statistics/guam.html">Guam</a>
                </td>
                <td>GU</td>
                <td class="rightalign">549.0</td>
                <td class="rightalign">2.215</td>
                <td class="rightalign">165,768</td>
                <td class="rightalign">7.336</td>
            </tr>
            <tr class="odd">
                <td>192</td>
                <td class="rightalign">1,134</td>
                <td>
                    <a href="/statistics/comoros.html">Comoros</a>
                </td>
                <td>KM</td>
                <td class="rightalign">2,170.0</td>
                <td class="rightalign">0.523</td>
                <td class="rightalign">832,322</td>
                <td class="rightalign">1.362</td>
            </tr>
            <tr>
                <td>193</td>
                <td class="rightalign">1,126</td>
                <td>
                    <a href="/statistics/falkland-islands.html">Falkland Islands</a>
                </td>
                <td>FK</td>
                <td class="rightalign">12,173.0</td>
                <td class="rightalign">0.092</td>
                <td class="rightalign">2,638</td>
                <td class="rightalign">426.839</td>
            </tr>
            <tr class="odd">
                <td>194</td>
                <td class="rightalign">1,084</td>
                <td>
                    <a href="/statistics/barbados.html">Barbados</a>
                </td>
                <td>BB</td>
                <td class="rightalign">431.0</td>
                <td class="rightalign">2.515</td>
                <td class="rightalign">286,641</td>
                <td class="rightalign">3.782</td>
            </tr>
            <tr>
                <td>195</td>
                <td class="rightalign">1,080</td>
                <td>
                    <a href="/statistics/kiribati.html">Kiribati</a>
                </td>
                <td>KI</td>
                <td class="rightalign">811.0</td>
                <td class="rightalign">1.332</td>
                <td class="rightalign">115,847</td>
                <td class="rightalign">9.323</td>
            </tr>
            <tr class="odd">
                <td>196</td>
                <td class="rightalign">1,002</td>
                <td>
                    <a href="/statistics/kuwait.html">Kuwait</a>
                </td>
                <td>KW</td>
                <td class="rightalign">17,820.0</td>
                <td class="rightalign">0.056</td>
                <td class="rightalign">4,137,309</td>
                <td class="rightalign">0.242</td>
            </tr>
            <tr>
                <td>197</td>
                <td class="rightalign">996</td>
                <td>
                    <a href="/statistics/american-samoa.html">American Samoa</a>
                </td>
                <td>AS</td>
                <td class="rightalign">199.0</td>
                <td class="rightalign">5.005</td>
                <td class="rightalign">55,465</td>
                <td class="rightalign">17.957</td>
            </tr>
            <tr class="odd">
                <td>198</td>
                <td class="rightalign">943</td>
                <td>
                    <a href="/statistics/brunei.html">Brunei</a>
                </td>
                <td>BN</td>
                <td class="rightalign">5,770.0</td>
                <td class="rightalign">0.163</td>
                <td class="rightalign">428,962</td>
                <td class="rightalign">2.198</td>
            </tr>
            <tr>
                <td>199</td>
                <td class="rightalign">930</td>
                <td>
                    <a href="/statistics/samoa.html">Samoa</a>
                </td>
                <td>WS</td>
                <td class="rightalign">2,944.0</td>
                <td class="rightalign">0.316</td>
                <td class="rightalign">196,130</td>
                <td class="rightalign">4.742</td>
            </tr>
            <tr class="odd">
                <td>200</td>
                <td class="rightalign">919</td>
                <td>
                    <a href="/statistics/northern-mariana-islands.html">Northern Mariana Islands</a>
                </td>
                <td>MP</td>
                <td class="rightalign">477.0</td>
                <td class="rightalign">1.927</td>
                <td class="rightalign">56,882</td>
                <td class="rightalign">16.156</td>
            </tr>
            <tr>
                <td>201</td>
                <td class="rightalign">848</td>
                <td>
                    <a href="/statistics/guernsey.html">Guernsey</a>
                </td>
                <td>GG</td>
                <td class="rightalign">78.0</td>
                <td class="rightalign">10.872</td>
                <td class="rightalign">65,228</td>
                <td class="rightalign">13.001</td>
            </tr>
            <tr class="odd">
                <td>202</td>
                <td class="rightalign">831</td>
                <td>
                    <a href="/statistics/palau.html">Palau</a>
                </td>
                <td>PW</td>
                <td class="rightalign">458.0</td>
                <td class="rightalign">1.814</td>
                <td class="rightalign">17,907</td>
                <td class="rightalign">46.406</td>
            </tr>
            <tr>
                <td>203</td>
                <td class="rightalign">813</td>
                <td>
                    <a href="/statistics/south-georgia-and-south-sandwich-islands.html">South Georgia and South Sandwich Islands</a>
                </td>
                <td>GS</td>
                <td class="rightalign">3,903.0</td>
                <td class="rightalign">0.208</td>
                <td class="rightalign">30</td>
                <td class="rightalign">27,100.000</td>
            </tr>
            <tr class="odd">
                <td>204</td>
                <td class="rightalign">802</td>
                <td>
                    <a href="/statistics/cook-islands.html">Cook Islands</a>
                </td>
                <td>CK</td>
                <td class="rightalign">240.0</td>
                <td class="rightalign">3.342</td>
                <td class="rightalign">21,388</td>
                <td class="rightalign">37.498</td>
            </tr>
            <tr>
                <td>205</td>
                <td class="rightalign">775</td>
                <td>
                    <a href="/statistics/antigua-and-barbuda.html">Antigua and Barbuda</a>
                </td>
                <td>AG</td>
                <td class="rightalign">443.0</td>
                <td class="rightalign">1.749</td>
                <td class="rightalign">96,286</td>
                <td class="rightalign">8.049</td>
            </tr>
            <tr class="odd">
                <td>206</td>
                <td class="rightalign">773</td>
                <td>
                    <a href="/statistics/british-virgin-islands.html">British Virgin Islands</a>
                </td>
                <td>VG</td>
                <td class="rightalign">153.0</td>
                <td class="rightalign">5.052</td>
                <td class="rightalign">29,802</td>
                <td class="rightalign">25.938</td>
            </tr>
            <tr>
                <td>207</td>
                <td class="rightalign">767</td>
                <td>
                    <a href="/statistics/tonga.html">Tonga</a>
                </td>
                <td>TO</td>
                <td class="rightalign">748.0</td>
                <td class="rightalign">1.025</td>
                <td class="rightalign">103,197</td>
                <td class="rightalign">7.432</td>
            </tr>
            <tr class="odd">
                <td>208</td>
                <td class="rightalign">755</td>
                <td>
                    <a href="/statistics/grenada.html">Grenada</a>
                </td>
                <td>GD</td>
                <td class="rightalign">344.0</td>
                <td class="rightalign">2.195</td>
                <td class="rightalign">111,454</td>
                <td class="rightalign">6.774</td>
            </tr>
            <tr>
                <td>209</td>
                <td class="rightalign">668</td>
                <td>
                    <a href="/statistics/bermuda.html">Bermuda</a>
                </td>
                <td>BM</td>
                <td class="rightalign">53.0</td>
                <td class="rightalign">12.604</td>
                <td class="rightalign">63,968</td>
                <td class="rightalign">10.443</td>
            </tr>
            <tr class="odd">
                <td>210</td>
                <td class="rightalign">654</td>
                <td>
                    <a href="/statistics/mayotte.html">Mayotte</a>
                </td>
                <td>YT</td>
                <td class="rightalign">374.0</td>
                <td class="rightalign">1.749</td>
                <td class="rightalign">279,471</td>
                <td class="rightalign">2.340</td>
            </tr>
            <tr>
                <td>211</td>
                <td class="rightalign">653</td>
                <td>
                    <a href="/statistics/sao-tome-and-principe.html">São Tomé and Príncipe</a>
                </td>
                <td>ST</td>
                <td class="rightalign">1,001.0</td>
                <td class="rightalign">0.652</td>
                <td class="rightalign">197,700</td>
                <td class="rightalign">3.303</td>
            </tr>
            <tr class="odd">
                <td>212</td>
                <td class="rightalign">650</td>
                <td>
                    <a href="/statistics/saint-helena.html">Saint Helena</a>
                </td>
                <td>SH</td>
                <td class="rightalign">410.0</td>
                <td class="rightalign">1.585</td>
                <td class="rightalign">7,460</td>
                <td class="rightalign">87.131</td>
            </tr>
            <tr>
                <td>213</td>
                <td class="rightalign">625</td>
                <td>
                    <a href="/statistics/wallis-and-futuna.html">Wallis and Futuna</a>
                </td>
                <td>WF</td>
                <td class="rightalign">274.0</td>
                <td class="rightalign">2.281</td>
                <td class="rightalign">16,025</td>
                <td class="rightalign">39.002</td>
            </tr>
            <tr class="odd">
                <td>214</td>
                <td class="rightalign">616</td>
                <td>
                    <a href="/statistics/turks-and-caicos-islands.html">Turks and Caicos Islands</a>
                </td>
                <td>TC</td>
                <td class="rightalign">430.0</td>
                <td class="rightalign">1.433</td>
                <td class="rightalign">37,665</td>
                <td class="rightalign">16.355</td>
            </tr>
            <tr>
                <td>215</td>
                <td class="rightalign">570</td>
                <td>
                    <a href="/statistics/st-vincent-and-grenadines.html">St Vincent and Grenadines</a>
                </td>
                <td>VC</td>
                <td class="rightalign">389.0</td>
                <td class="rightalign">1.465</td>
                <td class="rightalign">110,211</td>
                <td class="rightalign">5.172</td>
            </tr>
            <tr class="odd">
                <td>216</td>
                <td class="rightalign">558</td>
                <td>
                    <a href="/statistics/bahrain.html">Bahrain</a>
                </td>
                <td>BH</td>
                <td class="rightalign">665.0</td>
                <td class="rightalign">0.839</td>
                <td class="rightalign">1,569,439</td>
                <td class="rightalign">0.356</td>
            </tr>
            <tr>
                <td>217</td>
                <td class="rightalign">554</td>
                <td>
                    <a href="/statistics/seychelles.html">Seychelles</a>
                </td>
                <td>SC</td>
                <td class="rightalign">455.0</td>
                <td class="rightalign">1.218</td>
                <td class="rightalign">96,762</td>
                <td class="rightalign">5.725</td>
            </tr>
            <tr class="odd">
                <td>218</td>
                <td class="rightalign">544</td>
                <td>
                    <a href="/statistics/st-kitts-and-nevis.html">St Kitts and Nevis</a>
                </td>
                <td>KN</td>
                <td class="rightalign">261.0</td>
                <td class="rightalign">2.084</td>
                <td class="rightalign">52,441</td>
                <td class="rightalign">10.374</td>
            </tr>
            <tr>
                <td>219</td>
                <td class="rightalign">527</td>
                <td>
                    <a href="/statistics/bhutan.html">Bhutan</a>
                </td>
                <td>BT</td>
                <td class="rightalign">47,000.0</td>
                <td class="rightalign">0.011</td>
                <td class="rightalign">754,394</td>
                <td class="rightalign">0.699</td>
            </tr>
            <tr class="odd">
                <td>220</td>
                <td class="rightalign">522</td>
                <td>
                    <a href="/statistics/saint-pierre-and-miquelon.html">Saint Pierre and Miquelon</a>
                </td>
                <td>PM</td>
                <td class="rightalign">242.0</td>
                <td class="rightalign">2.157</td>
                <td class="rightalign">7,012</td>
                <td class="rightalign">74.444</td>
            </tr>
            <tr>
                <td>221</td>
                <td class="rightalign">516</td>
                <td>
                    <a href="/statistics/bonaire-sint-eustatius-and-saba.html">Bonaire, Sint Eustatius, and Saba</a>
                </td>
                <td>BQ</td>
                <td class="rightalign">328.0</td>
                <td class="rightalign">1.573</td>
                <td class="rightalign">18,012</td>
                <td class="rightalign">28.648</td>
            </tr>
            <tr class="odd">
                <td>222</td>
                <td class="rightalign">498</td>
                <td>
                    <a href="/statistics/curacao.html">Curaçao</a>
                </td>
                <td>CW</td>
                <td class="rightalign">444.0</td>
                <td class="rightalign">1.122</td>
                <td class="rightalign">159,849</td>
                <td class="rightalign">3.115</td>
            </tr>
            <tr>
                <td>223</td>
                <td class="rightalign">493</td>
                <td>
                    <a href="/statistics/jersey.html">Jersey</a>
                </td>
                <td>JE</td>
                <td class="rightalign">116.0</td>
                <td class="rightalign">4.250</td>
                <td class="rightalign">90,812</td>
                <td class="rightalign">5.429</td>
            </tr>
            <tr class="odd">
                <td>224</td>
                <td class="rightalign">483</td>
                <td>
                    <a href="/statistics/aruba.html">Aruba</a>
                </td>
                <td>AW</td>
                <td class="rightalign">193.0</td>
                <td class="rightalign">2.503</td>
                <td class="rightalign">105,845</td>
                <td class="rightalign">4.563</td>
            </tr>
            <tr>
                <td>225</td>
                <td class="rightalign">463</td>
                <td>
                    <a href="/statistics/dominica.html">Dominica</a>
                </td>
                <td>DM</td>
                <td class="rightalign">754.0</td>
                <td class="rightalign">0.614</td>
                <td class="rightalign">71,625</td>
                <td class="rightalign">6.464</td>
            </tr>
            <tr class="odd">
                <td>226</td>
                <td class="rightalign">415</td>
                <td>
                    <a href="/statistics/eswatini.html">Eswatini</a>
                </td>
                <td>SZ</td>
                <td class="rightalign">17,363.0</td>
                <td class="rightalign">0.024</td>
                <td class="rightalign">1,136,191</td>
                <td class="rightalign">0.365</td>
            </tr>
            <tr>
                <td>227</td>
                <td class="rightalign">380</td>
                <td>
                    <a href="/statistics/cayman-islands.html">Cayman Islands</a>
                </td>
                <td>KY</td>
                <td class="rightalign">262.0</td>
                <td class="rightalign">1.450</td>
                <td class="rightalign">64,174</td>
                <td class="rightalign">5.921</td>
            </tr>
            <tr class="odd">
                <td>228</td>
                <td class="rightalign">356</td>
                <td>
                    <a href="/statistics/tuvalu.html">Tuvalu</a>
                </td>
                <td>TV</td>
                <td class="rightalign">26.0</td>
                <td class="rightalign">13.692</td>
                <td class="rightalign">11,508</td>
                <td class="rightalign">30.935</td>
            </tr>
            <tr>
                <td>229</td>
                <td class="rightalign">323</td>
                <td>
                    <a href="/statistics/niue.html">Niue</a>
                </td>
                <td>NU</td>
                <td class="rightalign">260.0</td>
                <td class="rightalign">1.242</td>
                <td class="rightalign">2,166</td>
                <td class="rightalign">149.123</td>
            </tr>
            <tr class="odd">
                <td>230</td>
                <td class="rightalign">306</td>
                <td>
                    <a href="/statistics/montserrat.html">Montserrat</a>
                </td>
                <td>MS</td>
                <td class="rightalign">102.0</td>
                <td class="rightalign">3.000</td>
                <td class="rightalign">9,341</td>
                <td class="rightalign">32.759</td>
            </tr>
            <tr>
                <td>231</td>
                <td class="rightalign">282</td>
                <td>
                    <a href="/statistics/u-s-outlying-islands.html">U.S. Outlying Islands</a>
                </td>
                <td>UM</td>
                <td class="rightalign">0.0</td>
                <td class="rightalign"></td>
                <td class="rightalign">0</td>
                <td class="rightalign"></td>
            </tr>
            <tr class="odd">
                <td>232</td>
                <td class="rightalign">263</td>
                <td>
                    <a href="/statistics/gibraltar.html">Gibraltar</a>
                </td>
                <td>GI</td>
                <td class="rightalign">6.5</td>
                <td class="rightalign">40.462</td>
                <td class="rightalign">33,718</td>
                <td class="rightalign">7.800</td>
            </tr>
            <tr>
                <td>233</td>
                <td class="rightalign">233</td>
                <td>
                    <a href="/statistics/anguilla.html">Anguilla</a>
                </td>
                <td>AI</td>
                <td class="rightalign">102.0</td>
                <td class="rightalign">2.284</td>
                <td class="rightalign">13,254</td>
                <td class="rightalign">17.580</td>
            </tr>
            <tr class="odd">
                <td>234</td>
                <td class="rightalign">229</td>
                <td>
                    <a href="/statistics/saint-martin.html">Saint Martin</a>
                </td>
                <td>MF</td>
                <td class="rightalign">53.0</td>
                <td class="rightalign">4.321</td>
                <td class="rightalign">37,264</td>
                <td class="rightalign">6.145</td>
            </tr>
            <tr>
                <td>235</td>
                <td class="rightalign">199</td>
                <td>
                    <a href="/statistics/sint-maarten.html">Sint Maarten</a>
                </td>
                <td>SX</td>
                <td class="rightalign">21.0</td>
                <td class="rightalign">9.476</td>
                <td class="rightalign">40,654</td>
                <td class="rightalign">4.895</td>
            </tr>
            <tr class="odd">
                <td>236</td>
                <td class="rightalign">174</td>
                <td>
                    <a href="/statistics/macao.html">Macao</a>
                </td>
                <td>MO</td>
                <td class="rightalign">254.0</td>
                <td class="rightalign">0.685</td>
                <td class="rightalign">631,636</td>
                <td class="rightalign">0.275</td>
            </tr>
            <tr>
                <td>237</td>
                <td class="rightalign">168</td>
                <td>
                    <a href="/statistics/isle-of-man.html">Isle of Man</a>
                </td>
                <td>IM</td>
                <td class="rightalign">572.0</td>
                <td class="rightalign">0.294</td>
                <td class="rightalign">84,077</td>
                <td class="rightalign">1.998</td>
            </tr>
            <tr class="odd">
                <td>238</td>
                <td class="rightalign">132</td>
                <td>
                    <a href="/statistics/saint-barthelemy.html">Saint Barthélemy</a>
                </td>
                <td>BL</td>
                <td class="rightalign">21.0</td>
                <td class="rightalign">6.286</td>
                <td class="rightalign">8,450</td>
                <td class="rightalign">15.621</td>
            </tr>
            <tr>
                <td>239</td>
                <td class="rightalign">119</td>
                <td>
                    <a href="/statistics/british-indian-ocean-territory.html">British Indian Ocean Territory</a>
                </td>
                <td>IO</td>
                <td class="rightalign">60.0</td>
                <td class="rightalign">1.983</td>
                <td class="rightalign">4,000</td>
                <td class="rightalign">29.750</td>
            </tr>
            <tr class="odd">
                <td>240</td>
                <td class="rightalign">118</td>
                <td>
                    <a href="/statistics/tokelau.html">Tokelau</a>
                </td>
                <td>TK</td>
                <td class="rightalign">10.0</td>
                <td class="rightalign">11.800</td>
                <td class="rightalign">1,466</td>
                <td class="rightalign">80.491</td>
            </tr>
            <tr>
                <td>241</td>
                <td class="rightalign">115</td>
                <td>
                    <a href="/statistics/vatican-city.html">Vatican City</a>
                </td>
                <td>VA</td>
                <td class="rightalign">0.4</td>
                <td class="rightalign">261.364</td>
                <td class="rightalign">921</td>
                <td class="rightalign">124.864</td>
            </tr>
            <tr class="odd">
                <td>242</td>
                <td class="rightalign">109</td>
                <td>
                    <a href="/statistics/nauru.html">Nauru</a>
                </td>
                <td>NR</td>
                <td class="rightalign">21.0</td>
                <td class="rightalign">5.190</td>
                <td class="rightalign">12,704</td>
                <td class="rightalign">8.580</td>
            </tr>
            <tr>
                <td>243</td>
                <td class="rightalign">99</td>
                <td>
                    <a href="/statistics/monaco.html">Monaco</a>
                </td>
                <td>MC</td>
                <td class="rightalign">1.9</td>
                <td class="rightalign">50.769</td>
                <td class="rightalign">38,682</td>
                <td class="rightalign">2.559</td>
            </tr>
            <tr class="odd">
                <td>244</td>
                <td class="rightalign">97</td>
                <td>
                    <a href="/statistics/heard-and-mcdonald-islands.html">Heard and McDonald Islands</a>
                </td>
                <td>HM</td>
                <td class="rightalign">412.0</td>
                <td class="rightalign">0.235</td>
                <td class="rightalign">0</td>
                <td class="rightalign"></td>
            </tr>
            <tr>
                <td>245</td>
                <td class="rightalign">87</td>
                <td>
                    <a href="/statistics/christmas-island.html">Christmas Island</a>
                </td>
                <td>CX</td>
                <td class="rightalign">135.0</td>
                <td class="rightalign">0.644</td>
                <td class="rightalign">1,500</td>
                <td class="rightalign">58.000</td>
            </tr>
            <tr class="odd">
                <td>246</td>
                <td class="rightalign">81</td>
                <td>
                    <a href="/statistics/norfolk-island.html">Norfolk Island</a>
                </td>
                <td>NF</td>
                <td class="rightalign">34.6</td>
                <td class="rightalign">2.341</td>
                <td class="rightalign">1,828</td>
                <td class="rightalign">44.311</td>
            </tr>
            <tr>
                <td>247</td>
                <td class="rightalign">71</td>
                <td>
                    <a href="/statistics/san-marino.html">San Marino</a>
                </td>
                <td>SM</td>
                <td class="rightalign">61.2</td>
                <td class="rightalign">1.160</td>
                <td class="rightalign">33,785</td>
                <td class="rightalign">2.102</td>
            </tr>
            <tr class="odd">
                <td>248</td>
                <td class="rightalign">60</td>
                <td>
                    <a href="/statistics/cocos-keeling-islands.html">Cocos (Keeling) Islands</a>
                </td>
                <td>CC</td>
                <td class="rightalign">14.0</td>
                <td class="rightalign">4.286</td>
                <td class="rightalign">628</td>
                <td class="rightalign">95.541</td>
            </tr>
            <tr>
                <td>249</td>
                <td class="rightalign">47</td>
                <td>
                    <a href="/statistics/bouvet-island.html">Bouvet Island</a>
                </td>
                <td>BV</td>
                <td class="rightalign">49.0</td>
                <td class="rightalign">0.959</td>
                <td class="rightalign">0</td>
                <td class="rightalign"></td>
            </tr>
            <tr class="odd">
                <td>250</td>
                <td class="rightalign">41</td>
                <td>
                    <a href="/statistics/pitcairn-islands.html">Pitcairn Islands</a>
                </td>
                <td>PN</td>
                <td class="rightalign">47.0</td>
                <td class="rightalign">0.872</td>
                <td class="rightalign">46</td>
                <td class="rightalign">891.304</td>
            </tr>
            <tr>
                <td>251</td>
                <td class="rightalign">2</td>
                <td>
                    <a href="/statistics/.html"></a>
                </td>
                <td>CS</td>
                <td class="rightalign">102,350.0</td>
                <td class="rightalign">0.000</td>
                <td class="rightalign">10,829,175</td>
                <td class="rightalign">0.000</td>
            </tr>
            <tr class="odd">
                <td>252</td>
                <td class="rightalign">2</td>
                <td>
                    <a href="/statistics/.html"></a>
                </td>
                <td>AN</td>
                <td class="rightalign">960.0</td>
                <td class="rightalign">0.002</td>
                <td class="rightalign">300,000</td>
                <td class="rightalign">0.007</td>
            </tr>
            <tr>
                <td>253</td>
                <td class="rightalign">1</td>
                <td>
                    <a href="/statistics/yu.html">YU</a>
                </td>
                <td>YU</td>
                <td class="rightalign"></td>
                <td></td>
                <td class="rightalign"></td>
                <td></td>
            </tr>
            <tfoot>
                <tr class="tfooter">
                    <td></td>
                    <td>12,366,650</td>
                    <td colspan=6>
                        <a href="/statistics/total.html">Total</a>
                    </td>
                </tr>
            </tfoot>
        </table>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <div id="pageFooter">
            info@geonames.org  <img src="/img/smallant.gif" alt="ant" align="middle" hspace="40" border="0">
            <p>
                <a href="/">GeoNames Home</a>
                <span class="separator">&#8226;</span>
                <a href="/postal-codes/">Postal Codes</a>
                <span class="separator">&#8226;</span>
                <a href="/export/">Download / Webservice</a>
                <span class="separator">&#8226;</span>
                <a href="http://forum.geonames.org">Forum</a>
                <span class="separator">&#8226;</span>
                <a href="http://geonames.wordpress.com">Blog</a>
                <span class="separator">&#8226;</span>
                <a href="/sitemap.html">Sitemap</a>
        </div>
`;

type Countries = { [key: string]: { code: string; capitalized: string } };

const filtered = html
  .replaceAll('\n', '')
  .replaceAll('  ', '')
  .match(/<a href="\/statistics\/[a-zA-Z|\-]{1,}.html">(.*?)<\/a><\/td><td>[A-Z]{1,}<\/td>/g)
  ?.reduce((acc, curr) => {
    const [countryName, countryNameCode] = curr
      .replace('<a href="/statistics/', '')
      .replace('.html', '')
      .replaceAll('</td>', '')
      .replaceAll('</a><td>', '$')
      .split('">');
    const [capitalized, code] = countryNameCode.split('$');
    acc[countryName] = { code, capitalized };
    return acc;
  }, {} as Countries);
export default filtered;
