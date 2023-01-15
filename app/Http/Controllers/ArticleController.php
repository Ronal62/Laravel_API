<?php

namespace App\Http\Controllers;

use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $articles = Article::with('category','author')->get();
        return response()->json($articles);
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'category_id' => 'required',
            // 'user_id' => '',

        ]);

        $validated->user_id = auth()->id();

        $article = Article::create($validated);
        if($article){
            return response()->json($article);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $article = Article::findOrFail($id);
        return response()->json($article);
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $article = Article::findOrFail($id);

        if ($article) {
            $article->update($request->all());
            return response()->json($article);
        }
        return response()->json([
            'message' => 'Article Not Found',
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $article = Article::findOrFail($id);

        if ($article) {
            $article->delete();
            return response([
                'message' => 'Article has deleted'
            ]);
        }
        return response()->json([
            'message' => 'Article Not Found',
        ]);
    }
}
