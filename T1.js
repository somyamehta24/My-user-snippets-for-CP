{
	"1":{
	       "prefix": "somya",
	"body":[
"#include <bits/stdc++.h>",
"typedef long long ll;",
"typedef long double ld;",
"#define fr(i,a,b) for(ll i=a; i<b; i++)",
"#define rf(i,a,b) for(ll i=a; i>=b; i--)",
"typedef std::vector<long long > vi ;",
"#define F first",
"#define S second",
"#define fast ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);",
"#define mod 1000000007",
"#define PB push_back",
"#define MP make_pair",
"#define PI 3.14159265358979323846",
"#define all(a) a.begin(),a.end()",
"#define mx(a) *max_element(all(a))",
"#define mn(a) *min_element(all(a))",
"const ll INF=LLONG_MAX/2;",
"const ll N=2e5+1;",
"using  namespace std;",
"long long  fact[100005],ifact[100005];",
"void pre();",
"ll ncr(ll,ll);",
"ll pow1(ll n,ll p)",
"{",
"   if(p==0)return 1;",
"   ll x=pow1(n, p/2);",
"   x=(x*x)%mod;",
"   if(p%2==0)",
"   return x;",
"   else",
"   return (x*n)%mod;",
"}",
"ll binarySearch(ll arr[], ll l, ll r,ll x) ",
"{ ",
"   if (r >= l) ",
"   { ",
"       ll mid = l + (r - l) / 2;",  
"        if (arr[mid] == x) ",
"        return mid; ",
"        if (arr[mid] > x) ",
"        return binarySearch(arr, l, mid - 1, x); ",
"        return binarySearch(arr, mid + 1, r, x); ",
"   }",
"    return -1; ",
"} ",
"ll gcd(ll a, ll b, ll &x, ll &y)",
" {",
    "if (a == 0) {",
       " x = 0; y = 1;",
"        return b;",
   " }",
"    ll x1, y1;",
"    ll d = gcd(b%a, a, x1, y1);",
"    x = y1 - (b / a) * x1;",
"    y = x1;",
"    return d;",
"}",

"bool find_any_solution(ll a, ll b,ll c, ll &x0, ll &y0, ll &g) {",
"    g = gcd(llabs(a), llabs(b), x0, y0);",
"    if (c % g) {",
"        return false;",
"    }",
"    x0 *= c / g;",
"    y0 *= c / g;",
"    if (a < 0) x0 = -x0;",
"    if (b < 0) y0 = -y0;",
"    return true;",
"}",
"void shift_solution(ll & x,ll & y, ll a, ll b, ll cnt) {",
    "x += cnt * b;",
"    y -= cnt * a;",
"}",

"ll find_all_solutions(ll a, ll b, ll c, ll minx, ll maxx, ll miny, ll maxy)",
"{",
    "ll x, y, g;",
    "if (!find_any_solution(a, b, c, x, y, g))",
    "return 0;",
    "a /= g;",
"    b /= g;",
"",
"    ll sign_a = a > 0 ? +1 : -1;",
"    ll sign_b = b > 0 ? +1 : -1;",
"",
"    shift_solution(x, y, a, b, (minx - x) / b);",
 "   if (x < minx)",
    "shift_solution(x, y, a, b, sign_b);",
    "if (x > maxx)",
    "return 0;",
    "ll lx1 = x;",
    "shift_solution(x, y, a, b, (maxx - x) / b);",
    "if (x > maxx)",
    "shift_solution(x, y, a, b, -sign_b);",
    "ll rx1 = x;",
    "shift_solution(x, y, a, b, -(miny - y) / a);",
    "if (y < miny)",
    "shift_solution(x, y, a, b, -sign_a);",
    "if (y > maxy)",
    "return 0;",
    "ll lx2 = x;",
"",
   " shift_solution(x, y, a, b, -(maxy - y) / a);",
    "if (y > maxy)",
    "shift_solution(x, y, a, b, sign_a);",
    "ll rx2 = x;",
    "if (lx2 > rx2)",
    "swap(lx2, rx2);",
"    ll lx = max(lx1, lx2);",
"    ll rx = min(rx1, rx2);",
    "if (lx > rx)",
    "return 0;",
    "return (rx - lx) / llabs(b) + 1;",
"}",
"bool sortbysec(const pair<ll,ll> &a, const pair<ll,ll> &b) ",
"{ ",
   " return (a.second < b.second);" ,
"}" ,
"",  
"bool compare(const pair<ll, ll>&p1, const pair<ll,ll>&p2)",
"{",
  "  if(p1.F < p2.F) return true;",
       " if(p1.F == p2.F) return p1.S < p2.S;",
        "return false;",
"}",
"int main()",
"{",
"    fast;",
"   ll t=1;",
"   std::cin >> t;",
"   while(t--)",
"   {",
"       ll n,i,j=0;",
"       std::cin >> n;",
"   }",
"}",
"void pre()",
"{",
"    ll n=100000;                                           ",
"    fact[0]=fact[1]=1;                                     ",
"    for(long long  i=2;i<=n;i++) fact[i]=(fact[i-1]*i)%mod;",
"    ifact[n]=pow1(fact[n],mod-2);                          ",
"    for(long long  i=n-1;i>=0;i--)                         ",
"    {                                                      ",
"       ifact[i]=(ifact[i+1]*(i+1))%mod;                    ",
"    }                                                      ",
"}",
"ll ncr(ll n,ll r)",
"{",
    "ll res=(fact[n]*ifact[r])%mod;",
"    res=(res*ifact[n-r])%mod;",
    "return res;",
"}",
],
"description" : " "
},

"2":{
    "prefix": "sieve",
"body":[
    "ll spf[1000006];",
    "void sieve()",
    "{",
    "   fr(i,1,1000005)",
    "   spf[i]=i;",
    "   fr(i,2,1000005)",
    "   {",
    "       if(spf[i]==i)",
    "       {",
    "           for(ll j=i*i;j<=1000005;j+=i)",
    "           {",
    "               if(spf[j]==j)",
    "               {",
    "                   spf[j]=i;",
    "               }",
    "           }",
    "       }",
    "   }",
    "}",
],
"description": ""

},

"3":{
    "prefix": "orderedset",
    "body":[
        "#include <ext/pb_ds/assoc_container.hpp>",
        "#include <ext/pb_ds/tree_policy.hpp>",
        "using namespace __gnu_pbds;",
        "template<class T> using ordered_set = tree<T, null_type , less<T> , rb_tree_tag , tree_order_statistics_node_update> ;"
        ],
    "description": ""
    },
"4":{
    "prefix": "dfs",
    "body":[
        "ll n, m, mark[100005];  ",
        "vi adj[100005];         ",
        "void dfs(ll s)          ",
        "{                       ",
        "   mark[s] = 1;         ",
        "   for (auto i : adj[s])",
        "   {                    ",
        "       if (mark[i] == 1)",
        "       continue;        ",
        "       dfs(i);          ",
        "   }                    ",
        "}"
        ],
    "description": ""
    },
"5":{
    "prefix": "inBound",
    "body":[
        "const int dx[4] = {-1, 0, 1, 0};              ",
        "const int dy[4] = {0, 1, 0, -1};               ",
        "bool inBound(int x, int y, int n, int m) {    ",
        "    return x >= 0 && x < n && y >= 0 && y < m;",
        "}"
        ],
    "description": ""
    },
"6":{
    "prefix": "testing",
    "body":[
        "ll x=0;",
        "while (x != 1)",
        "{",
        "    ll a[n], b[n];",
        "    srand(time(0));",
        "    fr(i, 0, n)",
        "    {                      ",
        "        a[i] = rand() % 10;",
        "        b[i] = a[i];       ",
        "    }                      ",
        "    f = solve(a, n);       ",
        "    k = solve1(b, n);      ",
        "    if (f != k)            ",
        "    {                      ",
        "        fr(i, 0, n)        ",
        "        {                  ",
        "            cout << a[i] << ' ';",
        "        }                  ",
        "        cout<<'\n';        ",
        "            x = 1;         ",
        "        break;             ",
        "    }",
        "}"
        ],
    "description": ""
    },
"7":{
    "prefix": "random",
    "body":[
        "mt19937_64 rng(chrono::steady_clock::now().time_since_epoch().count());",
        "ll rand(ll L,ll R){",
        "  return uniform_int_distribution<ll>(L,R)(rng) ;",
        "}"
        ],
    "description": ""
    },
"8":{
    "prefix": "BIT",
    "body":[
        "ll tree[200005];",
        "ll get_sum(ll l, ll r)",
        "{",
        "    ll s = 0;",
        "    ll k = l - 1, ansl = 0;",
        "    while (k >= 1)",
        "    {",
        "        ansl += tree[k];",
        "        k -= k & -k;",
        "    }",
        "    k = r;",
        "    ll ansr = 0;",
        "    while (k >= 1)",
        "    {",
        "        ansr += tree[k];",
        "        k -= k & -k;",
        "    }",
        "    return ansr - ansl;",
        "}",
        "void update_sum(ll ind, ll val, ll preval)",
        "{",
        "    ll k = ind, x = val - preval;",
        "    while (k <= n)",
        "    {",
        "        tree[k] += x;",
        "        k += k & -k;",
        "    }",
        "}"
        ],
    "description": ""
    },
"9":{
    "prefix": "SEGTREE",
    "body":[
        "ll tree[4 * 200005];",
        "void build(ll tl, ll tr, ll v)",
        "{",
        "    if (tl == tr)",
        "    {",
        "        tree[v] = a[tr];",
        "        return;",
        "    }",
        "    ll mid = (tl + tr) / 2;",
        "    build(tl, mid, 2 * v);",
        "    build(mid + 1, tr, 2 * v + 1);",
        "    tree[v] = min(tree[2 * v], tree[2 * v + 1]);",
        "    return;",
        "}",
        "ll query(ll tl, ll tr, ll l, ll r, ll v)",
        "{",
        "    if (l > r)",
        "        return INF;",
        "    if (l == tl && r == tr)",
        "    {",
        "        return tree[v];",
        "    }",
        "    ll mid = (tl + tr) / 2;",
        "    return min(query(tl, mid, l, min(r, mid), 2 * v), query(mid + 1, tr, max(l, mid + 1), r, 2 * v + 1));",
        "}",
        "void update(ll tl, ll tr, ll ind, ll v, ll val)",
        "{",
        "    ll mid = (tl + tr) / 2;",
        "    if (ind > tr || ind < tl)",
        "        return;",
        "    if (ind == tl && tr == ind)",
        "    {",
        "        tree[v] = val;",
        "        return;",
        "    }",
        "    // if (ind <= mid)",
        "    update(tl, mid, ind, 2 * v, val);",
        "    // else",
        "    update(mid + 1, tr, ind, 2 * v + 1, val);",
        "    tree[v] = min(tree[2 * v], tree[2 * v + 1]);",
        "}",
        ],
    "description": ""
    },
"10":{
    "prefix": "dsu",
    "body":[
        "vector<int>parent,siz;",
        "void make_set(ll v)",
        "{",
        "    parent[v]=v;",
        "    siz[v]=1;",
        "}",
        "ll find_set(ll v)",
        "{",
        "    if(v==parent[v])",
        "    return v;",
        "    return parent[v]=find_set(parent[v]);",
        "}",
        "void union_sets(ll a,ll b)",
        "{",
        "    a=find_set(a);",
        "    b=find_set(b);",
        "    if(a==b)return;",
        "    if(a<b)swap(a,b);",
        "    siz[a]+=siz[b];",
        "    parent[b]=a;",
        "}",
        ],
    "description": ""
    },
}
struct SparseTable
{
    vector<ll> logs;
    vector<vector<T>> st;

    void init(ll n)
    {
        logs.resize(n + 1);
        logs[1] = 0;
        for (ll i = 2; i <= n; ++i)
        {
            logs[i] = logs[i / 2] + 1;
        }
        st.assign(MAX_LOG + 1, vector<ll>(n));
    }

    void build(const vector<ll> &a)
    {
        ll n = a.size(), k = logs[n];
        for (ll i = 0; i < n; ++i)
        {
            st[0][i] = a[i];
        }
        for (ll j = 1; j <= k; ++j)
        {
            for (ll i = 0; i + (1 << j) <= n; ++i)
            {
                st[j][i] = function(st[j - 1][i], st[j - 1][i + (1 << (j - 1))]);
            }
        }
    }

    ll function(ll a, ll b)
    {
        return gcd(a, b);
    }

    //0 based indexing [l, r]
    ll query(ll l, ll r)
    {
        --r;
        int k = logs[r - l + 1];
        return function(st[k][l], st[k][r - (1 << k) + 1]);
    }
};