desc "Deploy resource/public/ to gh-pages branch"
task :deploy do
  system("git branch -D gh-pages")
  system("git checkout --orphan gh-pages")
  system("mv resources/public build/")
  system("git rm -rf ./")
  system("cp -r build/* ./ ")
  system("git add .")
  system("git commit -a -m \"Release at #{Time.now.utc}\"")
  system("git push origin gh-pages -f")
  system("git checkout master")
end

task :default => :deploy
